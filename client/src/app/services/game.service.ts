import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../models';
import { CanActivate, Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';

declare const Pusher: any;

@Injectable({
  providedIn: 'root'
})

export class GameService implements CanActivate {
  pusherChannel: any[] = [];
  players: number;
  authenticated = false;

  pusher = new Pusher('32a6b9413c2f9c9ce393', {
    authEndpoint: `${environment.api_url}/pusher/auth`,
    cluster: 'ap1',
    forceTLS: true,
  });

  constructor(private http: HttpClient, private router: Router) { }

  canActivate(): boolean {
    if (!this.authenticated)
      this.router.navigate(['/login']);
    return (this.authenticated)
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  createPlayerAsset(gameId: string, playerId: number): Promise<Game> {
    return this.http.get<Game>(`${environment.api_url}/game/player/create/${gameId}/${playerId}`)
      .toPromise();
  }

  initPusher(gameId: string): Promise<number> {
    this.pusherChannel.push({ gameId: gameId, channel: this.pusher.subscribe(`presence-${gameId}`) });

    return new Promise((resolve, reject) => {
      const idx = this.pusherChannel.findIndex(e => e.gameId == gameId);
      this.pusherChannel[idx].channel.bind('pusher:subscription_succeeded', members => {
        if (!members) {
          reject({ error: 'Pusher subscription error' })
        } else {
          console.log('Pusher subscription succeeded, no of members:', members);
          this.players = members.count;
          resolve(this.players);
        }
      })
    })
  }

  listenMember(gameId: string): void {
    const idx = this.pusherChannel.findIndex(e => e.gameId == gameId);
    this.pusherChannel[idx].channel.bind('pusher:member_added', member => {
      this.players++
    })

    this.pusherChannel[idx].channel.bind('pusher:member_removed', member => {
      this.players--
    });
  }

  chooseActiveCard(gameId: string, playerId: number, cardId: number) {
    return this.http.get(`${environment.api_url}/game/card/active/${gameId}/${playerId}/${cardId}`)
      .toPromise();
  }

  chooseGuessCard(gameId: string, playerId: number, cardId: number) {
    return this.http.get(`${environment.api_url}/game/card/guess/${gameId}/${playerId}/${cardId}`)
      .toPromise();
  }

  getChannel() {
    return this.pusherChannel;
  }

  getNoOfPlayers() {
    return this.players;
  }

  submitStory(gameId: string, story: string) { //only for the storyTeller
    console.log("in service story is", story);
    return this.http.post(`${environment.api_url}/game/story/${gameId}`, { story })
      .toPromise();
  }

  guessCard(gameId: string, playerId: number, cardId: number) {
    return this.http.get(`${environment.api_url}/game/card/vote/${gameId}/${playerId}/${cardId}`)
      .toPromise();
  }

  getAllGroups(): Promise<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${window.localStorage.getItem('access_token')}`)
    return (
      this.http.get(`${environment.api_url}/api/groups`, { headers })
        .toPromise()
    );
  }

  login(formObj) {
    const headers = new HttpHeaders;
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`${environment.api_url}/authenticate`, formObj, { headers })
      .toPromise()
      .then((result: any) => {
        console.log('raw is', result)
        // Store token
        window.localStorage.setItem('access_token', result.access_token);
        this.authenticated = true;
        this.router.navigate(['groups']);
      })
      .catch(error => { })
  }

  signup(formObj) {
    return this.http.post(`${environment.api_url}/signup`, formObj)
      .toPromise()
  }

  getGameId(groupName: string) {
    return this.http.get(`${environment.api_url}/game/id/${groupName}`).toPromise();
  }

  getGroupNames() { //drop down menu options
    return this.http.get(`${environment.api_url}/api/allGroupNames`).toPromise();
  }

  createGroup(groupObj: any): Promise<any> {
    const newGroupFormData = this.toFormData(groupObj);
    return this.http.post<any>(`${environment.api_url}/api/create-group`, newGroupFormData).toPromise();
  }

  toFormData(formValue: any) {
    const formData = new FormData();

    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }
    return formData;
  }

  getPlayersOfGroup(groupName: string) {
    return this.http.get(`${environment.api_url}/api/users-of-group/${groupName}`)
      .toPromise();
  }

  joinGroup(groupId: string, groupName: string, email: string) {
    return this.http.put<any>(`${environment.api_url}/api/update-group/${groupId}`, { groupName, email }).toPromise();
  }

  removePlayer(email: string, groupId: string) {
    return this.http.delete<any>(`${environment.api_url}/api/delete-player/${groupId}/${email}`).toPromise();
  }

  logout() {
    //   Remove data
    window.localStorage.removeItem('access_token');
    this.authenticated = false;
  }
}
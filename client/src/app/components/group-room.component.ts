import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game.service';
import base64url from "base64url";

@Component({
  selector: 'app-group-room',
  templateUrl: './group-room.component.html',
  styleUrls: ['./group-room.component.css']
})
export class GroupRoomComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gameSvc: GameService, private router: Router) { }
  groupName: string;
  groupId: string;
  members = [];
  whoami: string;

  ngOnInit() {
    this.groupName = this.route.snapshot.paramMap.get('groupName');
    const jwtRetrieved = window.localStorage.getItem('access_token').split('.');
    const payload = JSON.parse(base64url.decode(jwtRetrieved[1]));
    this.whoami = payload.sub;

    this.gameSvc.getGameId(this.groupName)
      .then((result: any) => {
        this.groupId = result;
        console.log('groupId received from server:', this.groupId)
      })
      .catch(err => { console.log('error retrieving member of this group', err) })

    this.gameSvc.getPlayersOfGroup(this.groupName)
      .then((result: any) => {
        this.members = result;
      })
      .catch(err => { console.log('error retrieving member of this group', err) })
  }

  startGame() {
    this.router.navigate([`game/${this.groupId}/${this.whoami}`]);
  }

  joinGroup() {
    this.gameSvc.joinGroup(this.groupId, this.groupName, this.whoami)
      .then((result: any) => {
        this.members = result;
      })
      .catch(err => { console.log('error adding member of this group', err) })
  }

  removePlayer(email: string) {
    this.gameSvc.removePlayer(email, this.groupId)
      .then((result: any) => {
        this.members = this.members.filter(e => { return e.email != email })
      })
      .catch(err => { console.log('error removing member from this group', err) })
  }

  cannotJoinGroup() {
    //if you're already inside or there is already 6 players
    let emailArray = [];
    emailArray = this.members.map(e => { return e.email });
    return ((emailArray.includes(this.whoami) || this.members.length >= 6) ? true : false);
  }

  cannotTakeAction(email: string) {
    return (this.whoami != email ? true : false);
  }
}

import { Component } from '@angular/core';
import { GameService } from './services/game.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'client';
  constructor(private gameSvc: GameService, private router: Router) { }

  get authenticated() {
    return this.gameSvc.isAuthenticated();
  }
  
  logout() {
    this.gameSvc.logout();
    this.router.navigate(['login']);
  }
}

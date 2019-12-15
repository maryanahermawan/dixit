import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
// import { Group } from '../models';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';
@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  constructor(private gameSvc: GameService, private router: Router) { }
  groups = [];
  api_url = environment.api_url;
  ngOnInit() {
    this.gameSvc.getAllGroups()
      .then(result => {
        this.groups = result;
        console.log('groups are', this.groups)
      })
      .catch(err => {
        console.log('err is', err)
      })
  }

  goToGroupRoom(group) {
    this.router.navigate([`group-room/${group.group_name}`]);
  }

  goToCreateGroup(){
    this.router.navigate(['createGroup']);
  }

}

import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Group } from '../models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  constructor(private gameSvc: GameService, private router: Router) { }
  groups = [];
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

  goToGroupWaiting(group) {
    this.router.navigate([`group-waiting-room/${group.group_name}`]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-group-waiting',
  templateUrl: './group-waiting.component.html',
  styleUrls: ['./group-waiting.component.css']
})
export class GroupWaitingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gameSvc: GameService, private router: Router) { }
  groupName: string;
  groupId: string;

  ngOnInit() {
    this.groupName = this.route.snapshot.paramMap.get('groupName');
    console.log('groupName is', this.groupName);
    this.gameSvc.getGameId(this.groupName)
    .then((result: any) => {
      this.groupId = result;
      console.log('groupId received from server:', this.groupId)
    })
  }
  startGame(){
    this.router.navigate([`game/${this.groupId}`]);
  }
}

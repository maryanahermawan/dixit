import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  groups = [];
  groupName: string;
  createGroupForm: FormGroup;
  constructor(private gameSvc: GameService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createGroupForm = this.fb.group({
      groupName: ['', Validators.required],
      image: [null, Validators.required],
    })
    this.gameSvc.getGroupNames()
      .then((result: any) => { this.groups = result })
      .catch(err => { console.log('Error getting group names', err) })
  }

  createGroup() {
    const groupObj = {
      groupName: this.createGroupForm.value.groupName.name,
      image: this.createGroupForm.value.image,
    };
    this.gameSvc.createGroup(groupObj)
      .then(result => { this.router.navigate(['groups']); console.log('Create group successful, return is>> ', result) })
      .catch(err => { console.log('> error:', err) })
  }

  // isGroupNameTaken(){
  // }
}

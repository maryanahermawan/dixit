import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private GameSvc: GameService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      username: ['', Validators.required]
    })
  }

  signup() {
    this.GameSvc.signup(this.loginForm.value)
      .then(result => { console.log('Sign up success', result) })
      .catch(err => { console.log('Sign up error', err) })

    this.router.navigate(['login']);
  }

}

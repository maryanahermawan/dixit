import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { GameComponent } from './components/game.component';
import { GameService } from './services/game.service';
import { GroupListComponent } from './components/group-list.component';
import { GroupRoomComponent } from './components/group-room.component';
import { SignUpComponent } from './components/sign-up.component';
import { CreateGroupComponent } from './components/create-group.component';
import { PaymentComponent } from './components/payment.component';
import { PaymentSuccessComponent } from './components/payment-success.component';
import { PaymentErrorComponent } from './components/payment-error.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'createGroup', component: CreateGroupComponent },
  { path: 'game/:groupId/:email', component: GameComponent, canActivate: [GameService] },
  { path: 'groups', component: GroupListComponent, canActivate: [GameService] },
  { path: 'group-room/:groupName', component: GroupRoomComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'success', component: PaymentSuccessComponent },
  { path: 'cancel', component: PaymentErrorComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

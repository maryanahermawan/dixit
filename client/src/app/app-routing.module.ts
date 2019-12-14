import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { GameComponent } from './components/game.component';
import { GameService } from './services/game.service';
import { GroupListComponent } from './components/group-list.component';
import { GroupWaitingComponent } from './components/group-waiting.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'game/:groupId', component: GameComponent, canActivate: [GameService] },
  { path: 'groups', component: GroupListComponent, canActivate: [GameService] },
  { path: 'group-waiting-room/:groupName', component: GroupWaitingComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

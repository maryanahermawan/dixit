import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameService } from './services/game.service';
import { GameComponent } from './components/game.component';
import { LoginComponent } from './components/login.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { GroupListComponent } from './components/group-list.component';
import { DataViewModule } from 'primeng/dataview';
import { GroupWaitingComponent } from './components/group-waiting.component';
import { SignUpComponent } from './components/sign-up.component';
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent,
    GroupListComponent,
    GroupWaitingComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, ReactiveFormsModule, TableModule, InputTextModule, DialogModule, ButtonModule, DataViewModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

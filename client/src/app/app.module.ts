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
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { GroupListComponent } from './components/group-list.component';
import { DataViewModule } from 'primeng/dataview';
import { GroupRoomComponent } from './components/group-room.component';
import { SignUpComponent } from './components/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransitionGroupComponent, TransitionGroupItemDirective } from './components/transition-group.component';
import { CreateGroupComponent } from './components/create-group.component';
import { FileUploadComponent } from './components/app-file-upload.component';
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent,
    GroupListComponent,
    GroupRoomComponent,
    SignUpComponent,
    TransitionGroupComponent, TransitionGroupItemDirective, CreateGroupComponent, FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, ReactiveFormsModule, TableModule, InputTextModule, DialogModule, ButtonModule, DataViewModule,
    DropdownModule, BrowserAnimationsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

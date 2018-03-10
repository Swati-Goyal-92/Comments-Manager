import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { CommentComponent } from './comment/comment.component';

import { DataService } from './app.data.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TotoroComponent } from './totoro/totoro.component';
import { MononokeComponent } from './mononoke/mononoke.component';
import { PonyoComponent } from './ponyo/ponyo.component';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './comments/comments.component';
import { ChampionsComponent } from './champions/champions.component';

@NgModule({
  declarations: [
    AppComponent,
    TotoroComponent,
    MononokeComponent,
    PonyoComponent,
    MainComponent,
    CommentsComponent,
    ChampionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

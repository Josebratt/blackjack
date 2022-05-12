import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { EndComponent } from './end/end.component';
import { GameComponent } from './game/game.component';
import { ControlsComponent } from './controls/controls.component';

@NgModule({
  declarations: [
    HomeComponent,
    StartComponent,
    EndComponent,
    GameComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }

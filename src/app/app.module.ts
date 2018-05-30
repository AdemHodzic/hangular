import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './modules/routing/routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { GameComponent } from './components/game/game.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WinComponent } from './components/win/win.component';
import { LoseComponent } from './components/lose/lose.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameComponent,
    LeaderboardComponent,
    PageNotFoundComponent,
    WinComponent,
    LoseComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

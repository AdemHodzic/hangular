import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './modules/routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { GameComponent } from './components/game/game.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WinComponent } from './components/win/win.component';
import { LoseComponent } from './components/lose/lose.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameComponent,
    LeaderboardComponent,
    PageNotFoundComponent,
    WinComponent,
    LoseComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

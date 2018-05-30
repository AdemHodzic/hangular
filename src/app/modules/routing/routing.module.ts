import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { GameComponent } from '../../components/game/game.component';
import { LeaderboardComponent } from 'src/app/components/leaderboard/leaderboard.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

const routes = [
  {path: '', component: MenuComponent},
  {path: 'game', component: GameComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }

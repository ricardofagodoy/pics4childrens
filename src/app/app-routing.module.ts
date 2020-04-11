import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { MatchComponent } from './components/match/match.component'
import { ScoreComponent } from './components/score/score.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'level/match/:id', component: MatchComponent },
  { path: 'score', component: ScoreComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
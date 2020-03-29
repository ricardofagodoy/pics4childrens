import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { LevelsComponent } from './levels/levels.component'
import { ScoreComponent } from './score/score.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'levels', component: LevelsComponent },
  { path: 'score', component: ScoreComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  name : string

  constructor(private service : GameService, private router: Router) {}

  ngOnInit(): void {
    this.name = this.service.name
  }

  restart() {
    this.router.navigate(['/'])
  }
}
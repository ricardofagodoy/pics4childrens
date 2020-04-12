import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScoreComponent implements OnInit {

  name : string

  constructor(private service : GameService) {}

  ngOnInit(): void {
    this.name = this.service.name
  }
}
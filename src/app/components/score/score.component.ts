import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  name : string

  constructor(private service : GameService) {}

  ngOnInit(): void {
    this.name = this.service.name
  }
}

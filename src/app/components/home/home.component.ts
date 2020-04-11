import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  name : string = ''

  constructor(private service : GameService) {}

  ngOnInit(): void {}

  start() {
    this.service.start(this.name)
  }
}
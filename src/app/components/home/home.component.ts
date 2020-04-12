import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  name : string = ''

  constructor(private service : GameService, private router : Router) {}

  ngOnInit(): void {}

  start() {
    this.router.navigate(this.service.start(this.name))
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  level : any
  correct : number

  constructor(private route: ActivatedRoute, private router: Router, private service : GameService) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id'))
    ).subscribe(this.load_level.bind(this))
  }

  attach_drag_events(event) {

    const $ = window['$']

    // Sets all draggable events
    $(event.srcElement).draggable({
      revert: "invalid",
      start: function() {
        $(this).css('z-index', 100)
      },
      stop: function() {
        $(this).css('z-index', 0)
      }
    })
  }

  attach_drop_events(event) {

    // Ugly as hell but needed for it to work on mobile
    const $ = window['$']

    // Sets all droppable events
    $(event.srcElement).each((_, element) =>
      $(element).droppable({ 
        accept: '#' + element.id,
        drop: this.drop.bind(this)
      }))
  }

  load_level(id : string) {
    this.correct = 0
    this.level = this.service.get_level_data(+id)
  }

  drop(event) {

    event.srcElement.style.visibility = 'hidden'
    event.target.classList.add('correctAnimation')

    // Level finished
    if (++this.correct >= this.level.from.length)
      setTimeout(() => {
        this.router.navigate(this.service.get_next_level())
      }, 1500)
  }
}
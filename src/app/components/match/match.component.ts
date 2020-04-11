import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { GameService } from 'src/app/services/game.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
  encapsulation: ViewEncapsulation.None,
  /*animations: [
    trigger('correctEffect', [
      transition('* => on', [
        animate('2s', keyframes([
          style({ backgroundColor: 'rgba(0, 255, 0, 0)' }),
          style({ backgroundColor: 'rgba(0, 255, 0, 1)' }),
          style({ backgroundColor: 'rgba(0, 255, 0, 0)' })
        ]))
      ])
    ])
  ]*/
})
export class MatchComponent implements OnInit {

  IMG_SIZE : number = 45

  level : any
  correct : number

  constructor(private route: ActivatedRoute, private service : GameService) {}

  ngOnInit() : void {
    this.route.paramMap.pipe(
      map(params => params.get('id'))
    ).subscribe(this.load_level.bind(this))
  }

  load_level(id : string) {
    this.correct = 0
    this.level = this.service.get_level_data(+id)
  }

  dragstart_handler(event) {
    event.dataTransfer.setData("text/plain", event.target.id)
    event.dataTransfer.setDragImage(event.target, event.target.width/2, event.target.height/2)
  }

  dragover(event) {
    event.preventDefault()
  }

  drop(event) {

    const from_id = event.dataTransfer.getData("text")

    // Got match right
    if (event.target.id == from_id) {
      document.getElementById(from_id).style.display = 'none'

      event.target.classList.add('correctAnimation')

      // Level finished
      if (++this.correct >= this.level.from.length)
        this.service.move_next_level()
    }
  }
}
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class GameService {

    private levels : any
    private current_level : number
    public name : string;

    constructor(private router: Router) {
        this.levels = environment.levels
        this.name = 'John Doe'
    }

    public start(name : string) : void {
        this.name = name;
        this.current_level = 0
        this.move_next_level()
    }

    public get_level_data(id : number) {

        console.log('Getting level ' + id)
        this.current_level = id

        return this.get_current_level_data()
    }

    public move_next_level() : void {

        console.log('Moving to level ' + ++this.current_level)

        // Finished all levels
        if (this.current_level > this.levels.length)
            this.router.navigate(['/score'])
        else
            this.router.navigate(['/level', this.get_current_level_data()['type'], this.current_level])
    }

    private get_current_level_data() {
        return this.levels[this.current_level - 1]
    }
}
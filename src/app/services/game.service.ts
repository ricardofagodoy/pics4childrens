import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root',
})
export class GameService {

    private levels : any
    private current_level : number
    public name : string;

    constructor() {
        this.levels = environment.levels
        this.name = 'John Doe'
    }

    public start(name : string) : Array<any> {
        this.name = name;
        this.current_level = 0

        return this.get_next_level()
    }

    public get_level_data(id : number) {

        console.log('Getting level ' + id)
        this.current_level = id

        return this.get_current_level_data()
    }

    public get_next_level() : Array<any> {

        console.log('Moving to level ' + ++this.current_level)

        // Finished all levels
        if (this.current_level > this.levels.length)
            return ['/score']
        
        return ['/level', this.get_current_level_data()['type'], this.current_level]
    }

    private get_current_level_data() {
        return this.levels[this.current_level - 1]
    }
}
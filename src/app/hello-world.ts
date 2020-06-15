
import {Component} from '@angular/core';

@Component({
    selector:'hello',
    template:'<h2>Hello World</h2>'
})
export class greeting{
    public greet = (name:String)=> {

        console.log('Hello'+ name);
    }

}

let Greet = new greeting();
Greet.greet('Dhruv')

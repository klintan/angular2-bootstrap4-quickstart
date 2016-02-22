import {Component} from 'angular2/core';
import {NavComponent} from './nav.component';


@Component({
    selector: 'bootstrap-app',
    templateUrl: 'app/templates/main.html',
    directives: [NavComponent]
})

export class AppComponent { }
import { Component } from '@angular/core';

@Component({
    selector: "app-event",
    templateUrl: "./event-log.component.html",    
})
export class EventLogComponent{
    eventInfo = "Hi I am an event created at ";
    constructor(){
        this.eventInfo = this.eventInfo + (new Date().getTime());
    }
}
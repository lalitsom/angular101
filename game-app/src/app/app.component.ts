import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-app';
  eventArray: number[];

  createComponent(event){
    if(event==0){
      this.eventArray = [];
    }
    this.eventArray.push(event);
    console.log(this.eventArray);
  }

}

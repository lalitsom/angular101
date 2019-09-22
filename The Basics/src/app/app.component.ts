import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  displayDetails = false;
  eventArray = [];

  toggleDetails(event){
    this.eventArray.push("");
    console.log(this.eventArray);
    this.displayDetails=!this.displayDetails;
  };
}

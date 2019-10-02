import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recepie } from "../recepie.model";

@Component({
  selector: "app-recepie-list",
  templateUrl: "./recepie-list.component.html",
  styleUrls: ["./recepie-list.component.css"]
})
export class RecepieListComponent implements OnInit {
 @Output() onRecepieSelect = new EventEmitter <Recepie>();

  recepieList: Recepie[] = [
    new Recepie(
      "Salad1",
      "A saf salad",
      "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ),
    new Recepie(
      "Salad2",
      "A happy salad",
      "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    )
  ];
  constructor() {}

  ngOnInit() {}
emit(elem){
  this.onRecepieSelect.emit(elem);
}

}

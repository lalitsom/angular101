import { Component, OnInit } from "@angular/core";
import { Recepie } from "../recepie.model";

@Component({
  selector: "app-recepie-list",
  templateUrl: "./recepie-list.component.html",
  styleUrls: ["./recepie-list.component.css"]
})
export class RecepieListComponent implements OnInit {
  recepieList: Recepie[] = [
    new Recepie(
      "Salad",
      "A happy salad",
      "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    )
  ];
  constructor() {}

  ngOnInit() {}
}

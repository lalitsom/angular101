import { EventEmitter } from "@angular/core";
import { Recepie } from "./recepie.model";
import { Item } from "../shared/item.model";

export class RecepieService {
  recepieSelected = new EventEmitter<Recepie>();

  private recepieList: Recepie[] = [
    new Recepie(
      "Salad1",
      "A saf salad",
      "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      [new Item("safness", 1), new Item("tori", 2)]
    ),
    new Recepie(
      "Salad2",
      "A happy salad",
      "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      [new Item("dal", 1), new Item("chawal", 23)]
    )
  ];

  getRecepies() {
    return this.recepieList.slice();
  }
}

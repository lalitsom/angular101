import { Component, OnInit } from "@angular/core";
import { Item } from "../shared/item.model";
import { ShoppingService } from "./shopping.service";

@Component({
  selector: "app-shopping",
  templateUrl: "./shopping.component.html",
  styleUrls: ["./shopping.component.css"]
})
export class ShoppingComponent implements OnInit {
  mainItemList: Item[] = [];
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.mainItemList = this.shoppingService.getItems();
    this.shoppingService.itemListChanged.subscribe(itemlist => {
      this.mainItemList = itemlist;
    });
  }
}

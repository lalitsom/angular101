import { Item } from "../shared/item.model";
import { EventEmitter } from '@angular/core';

export class ShoppingService {
  itemListChanged = new EventEmitter<Item[]>();  
  private itemList: Item[] = [];

  addItem(item) {
    this.itemList.push(item);
    this.itemListChanged.emit(this.itemList.slice());
  }

  getItems() {
    return this.itemList.slice();
  }
}

import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  mainItemList: Item[] = [];
  constructor() { }

  ngOnInit() {
  }

  addNewItem(Item){
    this.mainItemList.push(Item);
  }

}

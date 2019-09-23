import { Component, OnInit } from '@angular/core';
import { Item } from '../../shared/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itemList: Item[] = [
    new Item("dhaniya","50"),
    new Item("podhina","50")
  ];

  constructor() { }

  onCreateItem(){
  }
  ngOnInit() {
  }

}

import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/shared/item.model';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() onItemAdded = new EventEmitter<Item>();
  newItem: Item = new Item("",0);
  constructor() { }

  ngOnInit() {
  }

  addNewItem(){
    this.onItemAdded.emit({name: this.newItem.name,qty: this.newItem.qty});
  }

}

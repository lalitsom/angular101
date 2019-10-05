import { Component, OnInit,EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { ShoppingService } from '../shopping.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() onItemAdded = new EventEmitter<Item>();
  @ViewChild('nameInput',{static: true}) nameElem: ElementRef;
  @ViewChild('amountInput',{static: true}) amountElem: ElementRef;
  newItem: Item = new Item("",0);
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  addNewItem(){    
    this.shoppingService.addItem({name: this.newItem.name,qty: this.newItem.qty});
    // this.newItem = {name: "",qty: 0};
  }

  isdisabled(){
    return !(this.newItem.name!="" && this.newItem.qty>0)
    return false;
  }

}

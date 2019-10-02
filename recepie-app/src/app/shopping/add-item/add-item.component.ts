import { Component, OnInit,EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Item } from 'src/app/shared/item.model';


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
  constructor() { }

  ngOnInit() {
  }

  addNewItem(){
    this.onItemAdded.emit({name: this.nameElem.nativeElement.value,qty: this.amountElem.nativeElement.value});
  }

}

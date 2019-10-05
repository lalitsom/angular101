import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { ShoppingService } from 'src/app/shopping/shopping.service';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.css']
})
export class RecepieDetailsComponent implements OnInit {
  @Input() recepie_details: Recepie;
  constructor(private shoppingService: ShoppingService) {
    
   }

  ngOnInit() {
  }

  addToList(){
    console.log(this.recepie_details.items);
    this.recepie_details.items.forEach(item => {
      this.shoppingService.addItem(item);
    });
  }
  
}

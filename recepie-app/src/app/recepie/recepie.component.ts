import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css']
})
export class RecepieComponent implements OnInit {
  selected_recepie : Recepie;
  constructor() { }

  ngOnInit() {
  }

  updateRecepie(recepie){
    this.selected_recepie = recepie;
  }

}

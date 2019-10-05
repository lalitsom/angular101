import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css'],
  providers: [RecepieService]
})
export class RecepieComponent implements OnInit {
  selected_recepie : Recepie;
  constructor(private recepieService: RecepieService) { }

  ngOnInit() {
    this.recepieService.recepieSelected.subscribe(
      (recepie: Recepie) => {
        this.selected_recepie = recepie;
      }
    );
  }
}

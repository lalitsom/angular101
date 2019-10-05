import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recepie } from "../recepie.model";
import { RecepieService } from "../recepie.service";

@Component({
  selector: "app-recepie-list",
  templateUrl: "./recepie-list.component.html",
  styleUrls: ["./recepie-list.component.css"]
})
export class RecepieListComponent implements OnInit {
  @Output() onRecepieSelect = new EventEmitter<Recepie>();
  recepieList: Recepie[] = [];
  constructor(private recepieService: RecepieService) {}

  ngOnInit() {
    this.recepieList = this.recepieService.getRecepies();
  }
  emit(recepie) {
    this.recepieService.recepieSelected.emit(recepie);
  }
}

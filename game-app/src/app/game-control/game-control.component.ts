import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() newEvent = new EventEmitter<number>();
  eventi = 0;
  startGameTimer;
  constructor() {}

  ngOnInit() {}

  startGame() {
    this.stopGame();
    this.eventi = 0;
    this.startGameTimer = setInterval(() => {
      this.createComponent();
    }, 1000);
  }
  stopGame() {
    clearInterval(this.startGameTimer);
  }

  createComponent = () => {    
    this.newEvent.emit(this.eventi);
    this.eventi += 1;
  };
}

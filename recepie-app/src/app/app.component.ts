import { Component } from "@angular/core";
import { ShoppingService } from './shopping/shopping.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [ShoppingService]
})
export class AppComponent {
  navpage = "shopping";

  navchanged(event) {
    this.navpage = event;
  }
}

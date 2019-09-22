import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingComponent } from "./shopping/shopping.component";
import { AddItemComponent } from "./shopping/add-item/add-item.component";
import { ItemListComponent } from "./shopping/item-list/item-list.component";
import { RecepieComponent } from './recepie/recepie.component';
import { RecepieListComponent } from './recepie/recepie-list/recepie-list.component';
import { RecepieDetailsComponent } from './recepie/recepie-details/recepie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    AddItemComponent,
    ItemListComponent,
    RecepieComponent,
    RecepieListComponent,
    RecepieDetailsComponent
  ],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

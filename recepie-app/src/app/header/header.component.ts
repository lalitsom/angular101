import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.css"]
})
export class HeaderComponent{
   @Output() pageEvent = new EventEmitter<string>();
    headerPage='shopping';

    open(page){
        this.headerPage=page;
        this.pageEvent.emit(page);
        }

}
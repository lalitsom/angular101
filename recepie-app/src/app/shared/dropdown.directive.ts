import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  OnInit
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective implements OnInit {
  @HostBinding("class.open") isOpen = false;
  elementCLicked = false;
  constructor(private elRef: ElementRef) {}
  ngOnInit() {}

  @HostListener("document:click",['$event']) onClick(event: Event) {      
    
    if(this.elementCLicked){
        this.elementCLicked=false;
    }
    else{
        this.isOpen=false;
    }
  }
  @HostListener("click") onclick(event: Event){
      this.elementCLicked = true;
      this.isOpen = !this.isOpen;
  }
}

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {}

  @HostListener('click') onClick() {
    this.textDeco('blue');
  } 
  @HostListener('dblclick') onDoubleClick() {
    this.textDeco('black');
  }

  private textDeco(action:string) {
    this.elem.nativeElement.style.color = action;
  }
}

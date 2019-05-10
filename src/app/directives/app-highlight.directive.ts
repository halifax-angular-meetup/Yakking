import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective implements OnInit, OnChanges {
  @Input('appHighlight') likes: {};
  constructor(public el: ElementRef) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.likes > 30) {
      this.el.nativeElement.style.border = '4px solid #ffab40';
    }
  }

}

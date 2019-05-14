import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective implements OnInit, OnChanges {
  @Input('appHighlight') likes: {};
  constructor(public el: ElementRef) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes.likes.currentValue > 30) {
      this.el.nativeElement.style.border = '4px solid #FFAB40';
    }
  }

}

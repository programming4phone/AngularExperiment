import { Directive, ElementRef, HostListener, Input, OnInit, OnDestroy  } from '@angular/core';

@Directive({
  selector: '[appRefs]'
})
export class RefsDirective implements OnInit, OnDestroy {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log('RefsDirective.OnInit');
    console.log(this.el);
  }

  ngOnDestroy() {
    console.log('RefsDirective.OnDestroy');
    console.log(this.el);
  }
}

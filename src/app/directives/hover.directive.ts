import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef) { }

  private originalBackgroundColor: string;

  @Input()
  private appHover: string;

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.originalBackgroundColor = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor = this.appHover;
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.originalBackgroundColor;
  }

}

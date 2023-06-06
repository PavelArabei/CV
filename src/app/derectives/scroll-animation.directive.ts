import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective {
  @Input() rightDirection!: boolean
  private readonly element: HTMLElement;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const rect = this.element.getBoundingClientRect();
    if (rect.top - 250 - rect.height < 0) {
      this.renderer.setStyle(this.element, 'transform', 'translateX(0)');
    } else {
      if (this.rightDirection) this.renderer.setStyle(this.element, 'transform', 'translateX(150%)');
      else this.renderer.setStyle(this.element, 'transform', 'translateX(-150%)');
    }
  }

}

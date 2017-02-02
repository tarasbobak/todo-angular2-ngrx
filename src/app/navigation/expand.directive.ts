import { Directive, ElementRef, HostListener, Input,
    OnInit } from '@angular/core';

@Directive({
  selector: '[ea-expand]'
})

export class ExpandDirective implements OnInit {
  @Input() private targetElSelector: string = '.collapsable';
  private targetEl;

  constructor(private el: ElementRef) { }

  public ngOnInit() {
    this.targetEl = this.el.nativeElement.querySelector(this.targetElSelector);
  }

  @HostListener('mouseenter') private onMouseEnter() {
    this.expand();
  }

  @HostListener('mouseleave') private onMouseLeave() {
    this.collapse();
  }

  private expand() {
    this.targetEl.style.display = 'block';
  }

  private collapse() {
    this.targetEl.style.display = 'none';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

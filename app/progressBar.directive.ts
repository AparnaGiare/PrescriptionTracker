import { Directive, ElementRef, Input, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({ selector: '[myHighlight],[value]' })
export class HighlightDirective {



   


    //@Input() public animate:boolean;

    private _defaultColor = 'red';

    @Input('myHighlight') highlightColor: string;
    @Input('value') widthValue: string;



    @Input() set defaultColor(colorName: string){
        this._defaultColor = colorName || this._defaultColor;
    }




 @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
        this.width('width: 25%');
  }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
        this.width(null);
    }
   constructor(private el: ElementRef, private renderer: Renderer) { }

    /*constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'width', '75%');
    }*/

    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'orange');
    }

     private width(width: string) {
        this.renderer.setElementStyle(this.el.nativeElement,  'backgroundColor', 'orange') ;
    }
}

import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollFade]'
})
export class ScrollFadeDirective {
  @Input() loaded;
  constructor(el: ElementRef,private render:Renderer2) {
    // setInterval(()=>{
    //   console.log(this.loaded);
    // },1000);
    //  console.log("zz");
    //  const p=this.render.parentNode(el.nativeElement);
       console.log(el);
       console.log(el.nativeElement.querySelector('#sheetContainer'));
    // //  console.log(this.render.selectRootElement('#innerContainer'));
    // this.render.listen(this.sheetContainer,'scroll',()=>{
    //   console.log("scorlling");
    // })
 }

}
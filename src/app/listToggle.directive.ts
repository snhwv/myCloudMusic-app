import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appListToggle]"
})
export class ListToggleDirective {
  bar;
  content;
  constructor(el: ElementRef, private renderer: Renderer2) {
    this.content = el.nativeElement.querySelector(".listContent");
    this.bar = el.nativeElement.querySelector(".listBar");
    let c = this.renderer.selectRootElement('.listBar');
    console.log(c);
    this.bindClick();
  }
  bindClick(){
     this.renderer.listen(this.bar.querySelector("i"),'click',()=>{this.animation()});
     this.renderer.listen(this.bar.querySelector(".listTitle"),'click',()=>{this.animation()});
  }
  animation(){
  }
}

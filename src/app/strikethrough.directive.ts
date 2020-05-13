import { Directive , ElementRef , HostListener } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {


  constructor(private elem:ElementRef ){};


 @HostListener("click") onclicks(){
   this.textDeco("line-through")
 }

 @HostListener("dblclick") onDoubleclicks(){
   this.textDeco("none")
 }
   private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

 }
}

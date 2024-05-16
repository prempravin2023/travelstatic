import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travelstatic';

  undo:String="";

  exam:boolean=true;

fun(){

  if(this.exam==true)
    {

      this.undo="showmenu";
      this.exam=false;
     }
    else{
      this.undo="";
      this.exam=true;
    }
  }




}

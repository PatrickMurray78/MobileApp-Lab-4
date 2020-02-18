import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  count:number = 0;
  hideLabel:boolean = true;

  counter() {
    this.count++;
  }

  displayText() {
    if(this.hideLabel == false) {
      this.hideLabel = true;
    }
    else {
      this.hideLabel = false;
    }
  }
}



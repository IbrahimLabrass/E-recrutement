import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  username : string = '';
  usernameStatus : boolean = false;

  onInputText(event: Event){
    this.username = (<HTMLInputElement>event.target).value
  }

  resetUserName() {
    this.username = '';
  }
}

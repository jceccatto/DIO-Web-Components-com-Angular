import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Single-Page-Application-Angular';
  //ngIf com dataBinding
  isAliveCard = true;
}

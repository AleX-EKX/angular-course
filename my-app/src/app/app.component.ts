import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = "Hello";
  array_auto = [
    { name: 'Lada' },
    { name: 'Mazda' },
    { name: 'Bmw' },
    { name: 'Exceed'}
  ]
  date_now = new Date();
}

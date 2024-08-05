import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent {
  constructor(private location: Location){}
  goBack(): void {
    this.location.back();
  }
}

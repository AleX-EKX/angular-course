import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter = 0;
  clickCounter(type: boolean) {
    type ? this.counter++ : this.counter--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

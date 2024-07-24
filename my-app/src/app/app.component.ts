import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  stopButton = false;
  stopRandomButton = false;
  randomValues: string[] = [];

  counterSubs$: Subscription = new Subscription();
  randomSubs$: Subscription = new Subscription();

  constructor(public counterService: CounterService) {}

  ngOnInit() {
    this.startCounter();
    this.startRandomNumbers();
  }

  startCounter() {
    this.counterSubs$ = this.counterService.setCounter().subscribe();
    this.stopButton = true;
  }

  stopSubs() {
    this.counterSubs$.unsubscribe();
    this.stopButton = false;
  }

  startRandomNumbers() {
    this.randomSubs$ = this.counterService.getRandomNumbers().subscribe(value => {
      this.randomValues.push(`Random Value: ${value}`);
    });
    this.stopRandomButton = true;
  }

  stopRandomNumbers() {
    this.randomSubs$.unsubscribe();
    this.stopRandomButton = false;
  }
}

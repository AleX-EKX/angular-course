import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CounterService {
  counterArray: number[] = [];

  setCounter(): Observable<number[]> {
    return interval(2000).pipe(
      map(() => {
        this.counterArray.push(this.counterArray.length);
        return this.counterArray;
      })
    );
  }

  getRandomNumbers(): Observable<number> {
    return interval(2000).pipe(
      map(() => Math.floor(Math.random() * 100)) 
    );
  }
}

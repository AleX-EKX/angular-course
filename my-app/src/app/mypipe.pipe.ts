import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: Date): Date {
    const newValue = new Date(value);
    newValue.setDate(newValue.getDate() + 5);
    return newValue;
  }

}

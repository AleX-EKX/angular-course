import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'gmt3Date'
})
export class Gmt3DatePipe implements PipeTransform {

  transform(value: Date | string | number, format: string = 'dd MMMM, HH:mm'): string {
    if (!value) return '';

    const date = new Date(value);

    const gmtOffset = 3 * 60;
    const localOffset = date.getTimezoneOffset();
    const offset = localOffset + gmtOffset;

    date.setMinutes(date.getMinutes() + offset);

    return formatDate(date, format, 'en-US'); 
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  constructor() { }
  numbers = [1, 2, 3, 4, 5]
  ngOnInit(): void {
    
  }

}

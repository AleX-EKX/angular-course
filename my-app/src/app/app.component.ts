import { Component, OnInit } from '@angular/core';
import { ResponseService, Task } from './response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tasks: Task[] = []; 

  constructor(private responseService: ResponseService) { }

  ngOnInit(): void {
    this.tasks = this.responseService.getTasks(); 
  }
  
}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetdataService } from './getdata.service';

export interface IData{
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public users: IData[] = [];

  constructor(private getData: GetdataService) {}

  ngOnInit(): void {
    this.getData.getPosts().subscribe({
      next: (resp: IData[]) => {
        this.users = resp;
        console.log(this.users);
      },
      error: (err: HttpErrorResponse) => {}
    });
  }
}

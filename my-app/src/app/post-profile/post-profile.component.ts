import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-profile',
  templateUrl: './post-profile.component.html',
  styleUrls: ['./post-profile.component.css']
})
export class PostProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profile = {
      id: 1,
      name: 'alex',
      age: 20
  }
  
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface IData{
  userId: number,
    id: number,
    title: string,
    body: string
}

@Component({
  selector: 'app-post-profile',
  templateUrl: './post-profile.component.html',
  styleUrls: ['./post-profile.component.css']
})
export class PostProfileComponent implements OnInit {
  post!: IData;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<IData>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .subscribe(data => this.post = data);
  }
  
  
}

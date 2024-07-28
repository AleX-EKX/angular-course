import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiService) {}

  getPosts() {
    this.apiService.getPosts().subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

  getComments() {
    this.apiService.getComments().subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

  createPost() {
    this.apiService.createPost().subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

  getInvalidPost() {
    this.apiService.getInvalidPost().subscribe(
      response => console.log(response),
      error => console.error('Ошибка сервера', error)
    );
  }

  getPostsHeaders() {
    this.apiService.getPostsHeaders().subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

  deletePost() {
    this.apiService.deletePost().subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }
}

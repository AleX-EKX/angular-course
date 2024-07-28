import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  getComments(): Observable<any> {
    const params = new HttpParams().set('postId', '1');
    return this.http.get(`${this.baseUrl}/comments`, { params });
  }

  createPost(): Observable<any> {
    return this.http.post(`${this.baseUrl}/posts`, {});
  }

  getInvalidPost(): Observable<any> {
    return this.http.get(`${this.baseUrl}/post`);
  }

  getPostsHeaders(): Observable<any> {
    const headers = new HttpHeaders().set('X-Test', '1');
    return this.http.get(`${this.baseUrl}/posts`, { headers, responseType: 'text' });
  }

  deletePost(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/posts/1`);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }
  
}

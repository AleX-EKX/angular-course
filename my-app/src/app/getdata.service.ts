import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData } from './app.component';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor( private http:HttpClient) { }

    getPosts(): Observable<IData[]> {
      return this.http.get<IData[]>(`${this.baseUrl}`);
    }
  
}

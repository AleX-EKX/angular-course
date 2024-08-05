import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://evo-academy.wckz.dev/api/cooking-blog';
  private token: string | null = null;

  constructor(private http: HttpClient) {
    this.token = this.getToken();
  }

  private getToken(): string | null {
    return sessionStorage.getItem('token') || localStorage.getItem('token');
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/users/sign`, body);
  }

  saveUserData(userData: any, fastSession: boolean): void {
    const storage = fastSession ? sessionStorage : localStorage;
    storage.setItem('userData', JSON.stringify(userData));
    storage.setItem('token', userData.jwtToken);
    this.token = userData.jwtToken;

    if (fastSession) {
      setTimeout(() => {
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('token');
      }, 2 * 60 * 1000);
    }
  }

  getUserData(): any {
    const userData = sessionStorage.getItem('userData') || localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

  logout(): void {
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    this.token = null;
  }

  getUsers(): Observable<any[]> {
    console.log(this.token);
    
    return this.http.get<any[]>(`${this.apiUrl}/users`, { headers: this.getAuthHeaders() });
  }

  deleteUser(uuid: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${uuid}`, { headers: this.getAuthHeaders() });
  }

  getUserRecipes(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts?user=${userId}`, { headers: this.getAuthHeaders() });
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`, { headers: this.getAuthHeaders() });
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: any): boolean {
    const user = this.authService.getUserData();
    const requiredRole = route.data['role'];

    if (user && user.role === requiredRole) {
      return true;
    } else {
      this.router.navigate(['/access']);
      return false;
    }
  }
  
}

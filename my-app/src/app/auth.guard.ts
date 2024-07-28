import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable()
export class AuthGuard implements CanActivateChild {
  constructor(private dataService: DataService, private router: Router) {}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.dataService.role === 'admin') {
      return true;
    } else {
      return this.router.navigateByUrl('/error');
    }
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/features/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnAuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let { authUser, authUserRole } = this.authService.useAuth();

    if (authUser?.isAuthenticated) {
      let authHomeRoute = this.authService.useAuthHomeRoute(authUserRole);
      this.router.navigateByUrl(authHomeRoute);
      return false;
    }
    return true;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_ROOT_SERVICE_URL, APP_ROOT_URL, HTTP_HEADERS_COMMON, ROLES } from 'src/app/config';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { storage } from 'src/app/utils/storage';

export type AuthUser = {
  firstname: string,
  lastname: string,
  username: string,
  role: ROLES,
  menu: any;
  xApiKey: string,
  isAuthenticated: boolean;
};

export type Auth = {
  authUser: AuthUser,
  authUserRole: ROLES;
};

export type LoginDTO = {
  username: string,
  secrets: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store<AppState>) { }

  authenticate(payload: LoginDTO) {
    let httpOptions = {
      headers: new HttpHeaders({
        ...HTTP_HEADERS_COMMON,
        'Access-Control-Allowed-Methods': 'POST'
      })
    };

    let url = APP_ROOT_SERVICE_URL + 'login';
    return this.http.post(url, payload, httpOptions);
  }

  useAuth(): Auth {
    let authUser: any;
    let authUserRole: any;
    this.store.select('authState').subscribe(state => {
      authUser = state.authUser;
      authUserRole = state.authUser?.role;
    });
    return { authUser, authUserRole };
  }

  useAuthHomeRoute(role: ROLES) {
    switch (role) {
      case ROLES.ADMIN: {
        return "/dashboard";
      }
      case ROLES.USER: {
        return "/home";
      }
      default:
        return "/unassigned";
    }
  }

  logout() {
    storage.clearAllItems();
    window.location.href = APP_ROOT_URL + 'auth/login';
  }
}

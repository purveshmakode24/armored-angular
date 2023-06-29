import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService, AuthUser } from '../../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { storage } from 'src/app/utils/storage';
import { AuthActions } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: any;
  loginErrMsg: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      this.returnUrl = params['params'].returnUrl;
    });
  }

  onSubmit(userLoginForm: NgForm) {
    userLoginForm.form.markAllAsTouched();

    if (userLoginForm.valid) {
      let loginForm = {
        'username': userLoginForm.form.value.username,
        'secrets': userLoginForm.form.value.password
      };

      this.authService.authenticate(loginForm).subscribe((res: any) => {
        if (res['status'] == 'Login Successful') {
          let authCurrentUser: AuthUser = {
            firstname: res['first_name'],
            lastname: res['last_name'],
            username: res['username'],
            role: res['role'],
            menu: res['screen_to_show'][res['role']],
            xApiKey: res['x-api-key'],
            isAuthenticated: true
          };

          // To persist authUser state in the LS.
          storage.setItem('auth_user', JSON.stringify(authCurrentUser));
          // To set application global state.
          this.store.dispatch(AuthActions.setAuthUser({ authCurrentUser }));

          if (this.returnUrl) {
            this.router.navigateByUrl(this.returnUrl);
          } else {
            window.location.reload();
          }
        }
      }, (err: any) => {
        this.loginErrMsg = "Invalid Username or Password.";
      });
    }
  }
}

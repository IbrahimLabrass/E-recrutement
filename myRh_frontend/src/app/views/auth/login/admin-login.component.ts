import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";


@Component( {
selector: "app-admin-login",
templateUrl: "./admin-login.component.html",
})
export class AdminLoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private _authService: AuthService) {

  }


  login() {
    // this._authService.loginCompany(this.loginForm.value).subscribe(data => {
    //   // store token in local storage
    //   localStorage.setItem('token', data.token);
    //   localStorage.setItem('user', JSON.stringify(data.company));
    //
    //   window.location.href = '/company/dashboard';
    // });
  }


  ngOnInit(): void {
  }
}

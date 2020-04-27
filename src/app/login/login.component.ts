import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../services/login.service";

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginResponse: string;
  loginSuccess: boolean;
  isLoggingIn: boolean;
  loading = false;
  submitted = false;
  returnUrl: string;

  auth:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginService,
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('',  [Validators.required])
    });

    // Get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  // Convenience getter for easy access to form fields
  get form() { return this.loginForm.controls; }

  performLogin() {
    this.loginService();
  }

  loginService(){
    let user = $('#username').val();
    let pass = $('#password').val();
    this.authenticationService.login(user, pass).then((data: any) => {
      localStorage.setItem('secret_auth_miss_line', 'Bearer ' + data.jwt)
      location.reload();
    }).catch((login_errors: any) => {
      const type = ['info'];

      var color = Math.floor((Math.random() * 4) + 1);
      $.notify({
        icon: "pe-7s-user",
        message: "Login incorrecto intenta nuevamente."
      },{
        type: type[color],
        timer: 1000,
        placement: {
          from: 'top',
          align: 'left'
        }
      });
    });
  }

}

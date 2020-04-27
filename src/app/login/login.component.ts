import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

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
  response: { publicKey: '', secretKey: '' };

  auth:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    //private authenticationService: AuthenticationService,) {}
  ) {}

  ngOnInit(): void {
    console.log('login')
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
    console.log('login');
    this.auth = true;
    localStorage.setItem('secret_auth_miss_line', 'true');
  }

}

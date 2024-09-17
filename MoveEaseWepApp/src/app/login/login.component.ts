import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { User } from '@shared/entities';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  user: User;
  loginForm: UntypedFormGroup;
  signupForm: UntypedFormGroup;
  isLoginMode = true;

  constructor(
    private fb: UntypedFormBuilder,
    private _userService: UserService,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Toggle between Login and Signup mode
  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  // Login form submission
  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login Form Submitted', this.loginForm.value);
      this._userService.createUser( this.loginForm.value).subscribe(result => console.log(result))
      
    } else {
      console.log('Login Form is Invalid');
    }
  }

  // Signup form submission
  onSignup() {
    if (
      this.signupForm.valid &&
      this.signupForm.value.password === this.signupForm.value.confirmPassword
    ) {
      console.log('Signup Form Submitted', this.signupForm.value);
    } else {
      console.log('Signup Form is Invalid or passwords do not match');
    }
  }
}

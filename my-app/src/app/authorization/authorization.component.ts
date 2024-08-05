import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  loginForm!: FormGroup;
  submitted = false;
  errorMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      fastSession: [false]
    });
  }

  get forms() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
  
    if (this.loginForm.invalid) {
      return;
    }
  
    const { username, password, fastSession } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      data => {
        this.authService.saveUserData(data, fastSession);
        this.router.navigate(['/']);
      },
      error => {
        this.errorMessage = 'Неверный логин или пароль';
      }
    );
  }
  
}

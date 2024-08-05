import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  private apiUrl = 'https://evo-academy.wckz.dev/api/cooking-blog/users/registration';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      firstName: [''],
      lastName: [''],
      middleName: ['']
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }

    this.http.post(this.apiUrl, this.registrationForm.value)
      .subscribe(
        response => {
          this.router.navigate(['/']);
        },
        error => {
          console.error('Ошибка при отправке данных', error);
        }
      );
  }
}

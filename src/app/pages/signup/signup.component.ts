import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  name = '';
  email = '';
  password = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  signup() {
    this.auth.signup({
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => {
        alert('Account created successfully');
        this.router.navigate(['/login']); // بعد التسجيل يروح Login
      },
      error: (err) => {
        this.error = err;
      }
    });
  }
}

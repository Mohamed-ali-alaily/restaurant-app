import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="auth-container">
      <h2>Login</h2>
      <form (ngSubmit)="login()">
        <input type="email" placeholder="Email" [(ngModel)]="email" name="email" required>
        <input type="password" placeholder="Password" [(ngModel)]="password" name="password" required>
        <button type="submit">Login</button>
        <p *ngIf="error" style="color:red">{{ error }}</p>
      </form>
    </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // البحث عن المستخدم في LocalStorage
    const user = users.find((u: any) =>
      u.email.toLowerCase() === this.email.trim().toLowerCase() &&
      u.password === this.password
    );

    if (user) {
      localStorage.setItem('token', 'dummy-token'); // حفظ token تجريبي
      this.router.navigate(['/home']); // بعد النجاح يروح Home
    } else {
      this.error = 'Invalid email or password';
    }
  }
}

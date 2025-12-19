import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor() {}

  login(data: { email: string; password: string }): Observable<any> {
    return new Observable(observer => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.email === data.email && u.password === data.password);

      if (user) {
        const token = 'dummy-token'; // رمز وهمي
        this.saveToken(token);
        observer.next({ token });
      } else {
        observer.error({ message: 'Invalid email or password' });
      }
      observer.complete();
    });
  }

  signup(data: { name: string; email: string; password: string }): Observable<any> {
    return new Observable(observer => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.some((u: any) => u.email === data.email)) {
        observer.error({ message: 'Email already exists' });
      } else {
        users.push(data);
        localStorage.setItem('users', JSON.stringify(users));
        observer.next({ message: 'Account created successfully' });
      }
      observer.complete();
    });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
  }
}

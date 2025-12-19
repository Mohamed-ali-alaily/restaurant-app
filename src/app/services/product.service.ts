import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  api = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get<any[]>(this.api);
  }
}

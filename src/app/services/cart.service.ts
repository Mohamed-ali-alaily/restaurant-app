import { Injectable } from '@angular/core';

interface MenuItem {
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: { item: MenuItem; quantity: number }[] = [];

  add(item: MenuItem) {
    const found = this.cart.find(c => c.item.name === item.name);
    found ? found.quantity++ : this.cart.push({ item, quantity: 1 });
  }

  getCart() {
    return this.cart;
  }

  remove(item: MenuItem) {
    this.cart = this.cart.filter(c => c.item.name !== item.name);
  }

  clear() {
    this.cart = [];
  }
}

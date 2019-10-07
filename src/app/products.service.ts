import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  shoppingCart = [];

  constructor() { }

  addToCart(product) {
    if (product.counter === 0){
      this.shoppingCart.push(product);
      product.counter++;
    }
    else {
      product.counter++;
    }
    console.log("Productos en carrito: ",this.shoppingCart);
  }

  removeFromCart(product) {
    if (product.counter > 1) {
      product.counter--;
    }
    else {
      this.shoppingCart.splice(0, 1);
    }
    console.log("Productos en carrito: ",this.shoppingCart);
  }
}

import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../API';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product = PRODUCTS;
  sumPrice = 0; 

  constructor(
    public router: Router, 
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    
    function finalPrice() {
      for (let i=0; i>PRODUCTS.length; i++) {
        this.sumPrice += PRODUCTS[i].calcTotal();
        console.log(this.sumPrice);
        return this.sumPrice;
      }
    }
  }

  fullCart = this.productsService.shoppingCart;

  buy(product) {
    this.productsService.addToCart(product);
    var total = product.calcTotal();
    console.log(product.price);
  }

  delete(product) {
    this.productsService.removeFromCart(product);
  }
}

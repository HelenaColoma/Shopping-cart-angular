import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../API';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  product = PRODUCTS;

  constructor(
    public router: Router, 
    private productsService: ProductsService
  ) {}

  ngOnInit() {
  }

  
  showCart = 0;
    

  buy(product) {
    this.productsService.addToCart(product);
    this.showCart++;
    return this.showCart;
  }
}

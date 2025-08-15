import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

// OnInit lifecycle hook interface to ensure ngOnInit method is implemented
export class ProductList implements OnInit{
  products: Product[] = [];

  // defining constructor for dependency injection.
  // ProductService is injected to fetch product data (getProducts method)
  // Router is injected to navigate between pages (navigate to product detail page)
  constructor(private productService: ProductService, private router: Router){}

  // ngOnInit runs after the component is created and initialized. Fetch data here and set component properties.
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  // viewproduct method called when user clicks on a product.
  // Route Array: defining the route path
  // path: 'product/:id' set in app.routes.ts
  viewproduct(productId: number){
    this.router.navigate(['/product', productId]);
  }

  addToCart(productId: number, event: Event) {
  event.stopPropagation(); // Prevent navigation to detail page
  // Cart logic.
  console.log('Added product to cart:', productId);
  // logging to check if the method is called
   }
}

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
export class ProductList implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router){}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  viewproduct(productId: number){
    this.router.navigate(['/product', productId]);
  }

   addToCart(productId: number, event: Event) {
  event.stopPropagation(); // Prevent navigation to detail page
  // Add your cart logic here
  console.log('Added product to cart:', productId);
  // You can show a toast/notification here
   }
}

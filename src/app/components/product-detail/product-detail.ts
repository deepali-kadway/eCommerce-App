import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})

export class ProductDetail implements OnInit {
  product: Product | undefined;

  // Inject ActivatedRoute to access route parameters; provides the current active route information.
  // when user navigates to /product/:id, the id parameter is to be extracted.
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  // Number constructor: represents a number of any kind.
  // this.route: ActivatedRoute service instance that provides access to the route parameters.
  // .snapshot: Represents the current state of the route.
  // .paramMap: Map-like object that contains all route parameters from the URL. It's part of the ActivatedRoute service
  // .get('id'): Retrieves the value of the 'id' parameter from the route.
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
    
    if (!this.product) {
      this.router.navigate(['/']); 
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
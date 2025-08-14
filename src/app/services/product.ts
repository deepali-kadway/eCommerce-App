import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {id: 100, name: 'Twill Wrap Dress', price: 49.99, description: 'Beautiful summer dress perfect for any occasion', imageUrl: 'assets/images/card1.jpg'},
    {id: 101, name: 'Linen Bow Strap Jumpsuit', price: 99.99, description: 'Classic vacation jumpsuit', imageUrl: 'assets/images/card2.jpg'},
    {id: 102, name: 'Ruched Midi Dress', price: 79.99, description: 'Chic Loose Fit for spring & summer', imageUrl: 'assets/images/card3.jpg'}
  ];

  // Defining Method to get all products
  getProducts(): Product[] {
    return this.products;
  }

  // Defining Method to get product by ID
  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}

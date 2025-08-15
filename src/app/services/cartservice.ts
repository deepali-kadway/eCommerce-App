import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

interface CartItem{
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class Cartservice {
  private cartItems: CartItem[] = []; // Array to hold cart items
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]); 

  cartItems$ = this.cartItemsSubject.asObservable(); 


}

import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [ProductList, Navbar, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

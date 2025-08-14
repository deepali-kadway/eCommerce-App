import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductDetail } from './components/product-detail/product-detail';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'product/:id', component: ProductDetail}
];

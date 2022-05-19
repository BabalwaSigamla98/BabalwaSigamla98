import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartsComponent } from './carts/carts.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'cart', component: CartsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'navbar', component: NavbarComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

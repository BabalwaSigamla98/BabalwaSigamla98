import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  public product: any[] = [];
  public grandTotal!: number;
  public quantity: FormControl = new FormControl(0);
  cartItems: any[] = [];

  constructor(private cartservice :CartService) { }

  ngOnInit(){
    this.cartItems = this.cartservice.getCartItems();
  }
  
  removeItem(product : any){
    this.cartservice.removeCartItem(product);
  }

  emptycart(){
    // this.cartservice.removeAllCart();
  }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  public product : any =[];
  public grandTotal !: number ;
  constructor(private cartservice :CartService) { }

  ngOnInit(){

  }
  removeItem(product : any){
    this.cartservice.removeCartItem(product);

  }
  emptycart(){
    this.cartservice.removeAllCart();
  }
}

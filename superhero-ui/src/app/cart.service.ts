import { Injectable } from "@angular/core";

@Injectable({
  providedIn : 'root'
})
export class CartService {
  // getCartItems(): any[] {
  //   throw new Error('Method not implemented.');
  // }

  private localCart: string = 'localCart';
  cartItems: any[] = [];

  removeCartItem(product: any) {
    // var index = this.cartItems.findIndex(x => x.)
    // this.cartItems.splice(index,1)
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    localStorage.setItem(this.localCart, JSON.stringify(this.cartItems));
    //this.getTotalPrice();
  }
  //getTotalPrice(){
   // let grandTotal=0;
    //this.cartItems.map((a:any)=>{
     // grandTotal += a.total;
   // })
 // }

  getCartItems() {
    var data = localStorage.getItem(this.localCart);
    if (data) {
      return this.cartItems = JSON.parse(data);
    }
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

// getCartItems() {
//   throw new Error("Function not implemented.");
// }

//  clearCart() {
//   throw new Error("Function not implemented.");
// }
}


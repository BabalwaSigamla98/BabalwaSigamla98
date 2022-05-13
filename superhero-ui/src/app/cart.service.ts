
export class CartService {
    removeCartItem(product: any) {
      throw new Error('Method not implemented.');
    }
    removeAllCart() {
      throw new Error('Method not implemented.');
    }
    products: any[] = [];
  /* . . . */
  
    addToCart(product: any) {
      this.products.push(product);
    }
  
    getProducts(){
        return this.products;
       }
  
    clearCart() {
        this.products = [];
        return this.products;
      }
  /* . . . */
  }
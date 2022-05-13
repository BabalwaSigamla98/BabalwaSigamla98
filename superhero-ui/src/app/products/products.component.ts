import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


  
  export class ProductsComponent {
    products: any[] = [];

    constructor(private productservice: ProductService, private  route : ActivatedRoute){}

    ngOnInit(): void {
      this.productservice.getProducts().subscribe((products: any )=>{
        console.log(products);
        this.products=products;
      })

    }
    addToCart(product: any) {
      this.productservice.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }
      
      
    // pname = 'Chivas '
    // price = 'R250.00'
    // dis='Discription'
    // item ="1";
    // get Proname(){
    //   return this.pname
    // }
  }



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  cartservice: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  bona(){
    alert("Congratulations your order have been successfully made");
    this.cartservice.removeAllCart();
  }
}

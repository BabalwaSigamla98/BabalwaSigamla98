import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private cartservice :CartService) { }

  ngOnInit(): void {
  }
  
  bona(){
    alert("Congratulations your order have been successfully made");
    this.cartservice.removeAllCart();
  }
}

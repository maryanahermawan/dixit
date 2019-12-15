import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payForm: FormGroup;
  constructor(private fb: FormBuilder, private paySvc: PaymentService) { }

  ngOnInit() {
    this.payForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required],
      quantity: ['', Validators.required]
    })
  }

  payment(){
    this.paySvc.makePayment();
  }
}

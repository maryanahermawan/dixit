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
  descriptions = [{ d: 'Monthly' }, { d: 'Yearly' }];
  quantities = [{ qy: 1 }, { qy: 2 }, { qy: 3 }];

  constructor(private fb: FormBuilder, private paySvc: PaymentService) { }

  ngOnInit() {
    this.payForm = this.fb.group({
      description: ['', Validators.required],
      amount: [0, Validators.required],
      quantity: [0, Validators.required]
    })
  }

  payment() {
    const payObj = {
      description: this.payForm.value.description.d,
      quantity: this.payForm.value.quantity.qy,
      amount: this.payForm.value.description.d == 'Monthly' ? 100 : 1000,
    }
    console.log('payObj is ', payObj);
    this.paySvc.makePayment(payObj);
  }
}

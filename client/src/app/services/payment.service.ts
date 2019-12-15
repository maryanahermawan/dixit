import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

// var stripe = Stripe('pk_test_FTYZKeYyfLlI43nwY6stdcgI00HRuJDDMa');
declare const Stripe: any;
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  stripe = Stripe('pk_test_FTYZKeYyfLlI43nwY6stdcgI00HRuJDDMa')

  makePayment(paymentObj) {
    this.http.post(`${environment.api_url}/payment`, { paymentObj }).toPromise()
      .then((result: any) => {
        console.log('id obtained', result.id)
        return this.stripe.redirectToCheckout({
          // Make the id field from the Checkout Session creation API response
          // available to this file, so you can provide it as parameter here
          // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
          sessionId: result.id
        })
      })
      .then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        console.log('error is', result.error.message);
      })
      .catch(err => { console.log('promise rejected', err) })

  }
}

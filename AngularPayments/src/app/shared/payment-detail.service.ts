import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail;
  list : PaymentDetail[];
  readonly rootURL = "http://localhost:52278/api/";

  constructor(private http: HttpClient) { }

  postPaymentDetail(formData: PaymentDetail){
    return this.http.post(this.rootURL + 'PaymentDetails', formData);
  }

}

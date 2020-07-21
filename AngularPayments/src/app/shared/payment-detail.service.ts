import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  list : PaymentDetail[];
  readonly rootURL = "http://localhost:52278/api/";

  constructor(private http: HttpClient) { }

  postPaymentDetail(formData: PaymentDetail){
    return this.http.post(this.rootURL + 'PaymentDetails', formData);
  }

  updatePaymentDetail(formData: PaymentDetail){
    return this.http.put(this.rootURL + 'PaymentDetails/' + formData.PMId, formData);
  }

  deletePaymentMethod(id){
    return this.http.delete(this.rootURL + 'paymentdetails/' + id)
  }

  refreshList(){
    this.http.get(this.rootURL + 'paymentdetails')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}

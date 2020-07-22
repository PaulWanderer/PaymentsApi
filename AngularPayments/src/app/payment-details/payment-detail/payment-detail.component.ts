import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from '../../shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service: PaymentDetailService, public toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null)
      form.resetForm();
    this.service.formData = {
      PMId:0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    }
  }

    onSubmit(form: NgForm){
      console.log(form);
      if (form.value.PMId == 0){
        this.insertRecord(form);
      }
      else {
        this.updateRecord(form);
      }
    }

    insertRecord(form:NgForm){
      this.service.postPaymentDetail(form.value).subscribe(
        res => {
          this.resetForm(form);
          this.toastr.success('Payment Method Saved', 'Payment Detail Register');
          this.service.refreshList();
        },
        err => {
          console.log(err);
        }
      )
    }

    updateRecord(form:NgForm){
      this.service.updatePaymentDetail(form.value).subscribe(
        res => {
          this.resetForm(form);
          this.toastr.success('Payment Detail Updated', 'Payment Detail Register');
          this.service.refreshList();          
        },
        err => {
          console.log(err);
        }
      )
    }


}

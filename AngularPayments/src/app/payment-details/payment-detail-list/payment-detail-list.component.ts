import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: [
  ]
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service: PaymentDetailService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(pd:PaymentDetail){
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(id: number){
    if (confirm('Are you sure you wish to delete this payment method?'))
    this.service.deletePaymentMethod(id)
    .subscribe(res => {
      this.service.refreshList();
      this.toastr.success('Payment Method Deleted', 'Payment Detail Register');
    },
      err => {
        console.log(err);
      });
  }
}

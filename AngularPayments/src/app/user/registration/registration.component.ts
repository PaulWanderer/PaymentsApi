import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user-service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null)
      form.resetForm();
    this.service.formData = {
      UserName: '',
      FullName: '',
      Email: '', 
      Password: ''
    }
  }

  onSubmit(form: NgForm){
    this.registerUser(form);
    this.resetForm();
  }

  registerUser(form: NgForm){
    this.service.registerUser(form.value).subscribe(
      res => {
        this.resetForm();
        this.toastr.success('Welcome!', 'User Registered');
      },
      err => {
        console.log(err);
      }
    )
  }
}

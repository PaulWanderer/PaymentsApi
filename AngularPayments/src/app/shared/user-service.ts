import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from './user-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UserService{
    formData: User;
    readonly rootURL = "http://localhost:52278/api/Registration/"

    constructor(private http: HttpClient){ }

    registerUser(formData: User){
        return this.http.post(this.rootURL + 'Register', formData);
    }

}
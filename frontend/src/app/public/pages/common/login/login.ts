import { Component } from '@angular/core';
import {FormControl,ReactiveFormsModule } from '@angular/forms';
import { login } from '../../../../core/models/login.model';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // userData:login={
  //   email:'',
  //   password:''
  // };

  firstName=new FormControl<string|null>('');
  lastName=new FormControl<string|null>('');
  email=new FormControl<string|null>('');

  
  constructor(){
    console.log(this.firstName.value)
  

    this.firstName.setValue('sudarshan')
    console.log(this.firstName.value)


    this.lastName.setValue('khatri')
    console.log(this.lastName.value)

    this.email.setValue('khatrisudarshan360@gmail.com')
    console.log(this.email.value)
  }





}

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

  const data=new FormControl<string|null>('');
  console.log(data.value);

  data.update('sudarshan');
  console.log(data.value);





}

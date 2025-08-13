import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Password } from 'primeng/password';
@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  standalone:true,
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {

  myform=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    password:new FormControl('',[Validators.required,Validators.minLength(12)])

  })
  submit()
  {
    console.log(this.myform.value)
  }
}

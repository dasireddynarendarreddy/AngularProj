import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dec-form',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dec-form.html',
  styleUrl: './dec-form.css'
})
export class DecForm {

  data:{name:string,phonenumber:number,email:string,gender:string}={
    name:'',
    phonenumber:0,
    email:'',
    gender:''
  }
  validate(form:NgForm)
  {
       console.log(form.value)
       console.log(form.valid)
  }

}

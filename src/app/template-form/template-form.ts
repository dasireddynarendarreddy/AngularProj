import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-template-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateForm {

  data:{
    name:string,
    password:string,
    email:string,
    gender:string
  }={
    name:'',
    password:'',
    email:'',
    gender:''
  }
    validate(form:NgForm)
    {
      console.log("the data is",form.value)
    }
}

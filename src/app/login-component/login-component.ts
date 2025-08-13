import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-component',
  imports:[FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
  constructor(private route:Router)
  {

  }

  data ={
    name:'',
    pass:''
  }
  error:string=''
  iserror:boolean=false

  validate()
  {
    if(this.data.name == "narendar" && this.data.pass == "56789")
    {
      console.log(this.data)
      this.route.navigate(["/register"])
      return
          
    }
    else{
      this.iserror=true
      this.error="Invalid Data!"
    }

  }

}

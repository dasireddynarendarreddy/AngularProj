import { Component } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { AlertService } from '../alert-service';
import { FormsModule } from '@angular/forms';
interface info
{
  
   name:string,
   
    age:number,
    pass:string,
    gender:string,
    designation:string,
    
    qualification:string
    image:string | ArrayBuffer | null 

}
@Component({
  selector: 'app-register-component',
  imports: [FormsModule,CommonModule,DialogModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css'
})
export class RegisterComponent {
  isedit:boolean=false
  dataToEdit:info={
     name:'',
    pass:'',
    age:0,
    designation:'',
    gender:'',
    qualification:'',
    image:null

  }
  ages:number[]=[18,19,20,21,22,23,24,25]
  static personsdata:info[]=[]
  count:number=0
  indexToUpdate!:number
  imagePreview: string | ArrayBuffer | null = null;
  constructor(private alert:AlertService)
  {

  }
  personsdatas:info[] = []; 

  ngOnInit() {
    this.personsdatas = RegisterComponent.personsdata;
  }

   data:info={
    name:'',
    pass:'',
    age:0,
    designation:'',
    gender:'',
    qualification:'',
    image:null
  }
  submit()
  {
    if(this.data.name && this.data.image && this.data.gender)
    {
    
    console.log("the data is",this.data)
    this.alert.showAlert()
   RegisterComponent.personsdata.push({name:this.data.name,age:this.data.age,gender:this.data.gender,designation:this.data.designation,qualification:this.data.qualification,image:this.data.image,pass:this.data.pass})
   this.data.name=''
   this.data.age=0
   this.data.designation='';
   this.data.pass=' '
   this.data.qualification=' ';
    }
    else{
      this.alert.showError()
    }
  }
  remove(id:number)
  {
    
         RegisterComponent.personsdata.splice(id,1)
         console.log("the data after removing",RegisterComponent.personsdata)
  }
  edit(id:number)
  {
    this.isedit=true
     this.indexToUpdate=id
     this.dataToEdit.name=this.personsdatas[id].name
    this.dataToEdit.age=this.personsdatas[id].age
    this.dataToEdit.qualification=this.personsdatas[id].qualification
    this.dataToEdit.gender=this.personsdatas[id].gender
    this.dataToEdit.designation=this.personsdatas[id].designation
    this.dataToEdit.image=this.personsdatas[id].image
    /**/
    console.log("the pervious data is",this.personsdatas)
   
    
    
   
    console.log("the data to send",RegisterComponent.personsdata[id]);
      
  }
  uploadImage(event:Event)
  {
    
     const input = event.target as HTMLInputElement;
    if(input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
     reader.onload = () => {
        this.data.image= reader.result; 
        console.log(this.imagePreview)
      };
        reader.readAsDataURL(file);
  }
}
update()
{
  console.log("the index to update is",this.indexToUpdate)
  this.personsdatas[this.indexToUpdate]={...this.dataToEdit}
  
    this.isedit=false
    
     
}

}

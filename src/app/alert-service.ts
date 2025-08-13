import { Injectable } from '@angular/core';
import Swal,{SweetAlertIcon} from 'sweetalert2';
import { RegisterComponent } from './register-component/register-component';
interface DataToEdit{
  name:string,
   
    age:number,
    gender:string,
    designation:string,
    pass:string,
    qualification:string,
    image:string|ArrayBuffer|null
}
@Injectable({
  providedIn: 'root'
})
export class AlertService {
    genders:string[]=[]
    
comp!:RegisterComponent
    update:DataToEdit={
      name:'',
   
    age:0,
    gender:'',
    designation:'',
    
    qualification:'',
    image:null,
    pass:''
    }
  DataToChange:DataToEdit={
    name:'',
    age:0,
    gender:'',
    designation:'',
    qualification:'',
    image:null,
    pass:''


     
  }
  showAlert(): void {
    const icon:SweetAlertIcon='success'
    Swal.fire({
      title: 'Success!',
      text: 'Your action was successful.',
      icon:icon,
      confirmButtonText: 'Okay'
    });
  }
  showError():void{
    Swal.fire({
      title: 'Error!',
      text: 'important Data was missed.',
      icon: 'error',
      
       cancelButtonText: 'No, keep it'
    });
    
  }
  showEdit() {
  
}

  updateData()
  {
    
    
  
  }
  
}

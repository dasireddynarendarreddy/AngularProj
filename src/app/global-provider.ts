import { Injectable } from '@angular/core';
interface info
{
  
   name:string,
   
    age:number,
    gender:string,
    designation:string,
    
    qualification:string

}
@Injectable({
  providedIn: 'root'
})
export class GlobalProvider {

  container:info[]=[]
  
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Person {
  id: number;
  name: string;
  age: number;
  adharNumber: string;
}
@Component({
  selector: 'app-auto-fill',
  imports: [CommonModule],
  templateUrl: './auto-fill.html',
  styleUrl: './auto-fill.css'
})
export class AutoFill {
  selectedperson:Person|undefined
  

 people: Person[] = [
  { id: 1, name: 'Narendar', age: 22, adharNumber: '1234-5678-9012' },
  { id: 2, name: 'Ramesh', age: 25, adharNumber: '2345-6789-0123' },
  { id: 3, name: 'Suresh', age: 28, adharNumber: '3456-7890-1234' },
  { id: 4, name: 'Naresh', age: 30, adharNumber: '4567-8901-2345' },
  { id: 5, name: 'Kumar', age: 26, adharNumber: '5678-9012-3456' },
  { id: 6, name: 'Rohan', age: 24, adharNumber: '6789-0123-4567' },
  { id: 7, name: 'Raju', age: 27, adharNumber: '7890-1234-5678' },
  { id: 8, name: 'Vikram', age: 29, adharNumber: '8901-2345-6789' },
  { id: 9, name: 'Ajay', age: 23, adharNumber: '9012-3456-7890' },
  { id: 10, name: 'Manoj', age: 31, adharNumber: '0123-4567-8901' }
];

 fill(event:Event)
 {
  let element=event.target as HTMLSelectElement
   this.selectedperson=this.people.find((data)=>data.adharNumber===element.value)
 }



}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-friend-comp',
  imports: [CommonModule],
  templateUrl: './friend-comp.html',
  styleUrl: './friend-comp.css'
})
export class FriendComp {
  constructor()
  {

  }
  common:string[]=["narendar","naresh","ram"]
   fr!:string
   commonfr: { id: number; name: string; hisf: string }[] = [];
  data=[
    
    {
      id:2,
      name:'kumar',
      hisf:'narendar'
    },
    {
      id:3,
      name:"rohan",
      hisf:'narendar'
    },
    {
      id:4,
      name:"raju",
      hisf:'narendar'
    },
    {
      id:5,
      name:'dinesh',
      hisf:'naresh'
    },
    {
      id:6,
      name:"roshan",
      hisf:'naresh'
    },
    {
      id:7,
      name:"laxman",
      hisf:'naresh'
    },
    {
      id:8,
      name:'xampa',
      hisf:'ram'
    },
    {
      id:9,
      name:"rjeevu",
      hisf:'ram'
    },
    {
      id:10,
      name:"virat",
      hisf:'ram'
    }
  ]
  find(event:Event)
  {
     let eventele=event.target as HTMLSelectElement
     console.log("the common one is",eventele.value)

     this.commonfr=this.data.filter((data)=>data.hisf===eventele.value)
     //this.df.detectChanges()
     console.log(this.commonfr)

  }

}

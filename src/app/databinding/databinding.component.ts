import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
  userData:string='kruthika'
  userInput:string='';
  isDisable:boolean=true

  constructor() { }

  ngOnInit(): void {
  }
  userdetail(event:any){
    console.log(event.target.value)
    this.isDisable=false


  }
  clear(){
    this.userInput=''
  }

}

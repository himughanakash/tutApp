import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports:[CommonModule, FormsModule],
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  isDiv1visible: boolean = true;
  isDiv2visible: boolean = true;
  num1: string ="";
  num2: string ="";
  isActive: boolean =true;
  cityNameArray: string[] = ['Pune', 'Delhi', 'Gurugram', 'Rohtak'];
  studentList: any[] = [
    {studId:1, name:'AAA', city:'Pune', isActive: false},
    {studId:2, name:'BBB', city:'Delhi', isActive: false},
    {studId:3, name:'CCC', city:'Gurugram', isActive: true},
    {studId:4, name:'DDD', city:'Rohtak', isActive: false},
  ]

  constructor() { }

  ngOnInit() {
  }
  showDiv1(){
    this.isDiv1visible = true;
  }
  hideDiv1(){
    this.isDiv1visible = false;
  }
  
  toggleDiv2(){
    this.isDiv2visible = !this.isDiv2visible;
  }

}

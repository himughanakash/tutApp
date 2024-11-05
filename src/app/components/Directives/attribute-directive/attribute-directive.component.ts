import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-attribute-directive',
  imports:[CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
  div1bgColor: string = "bg-primary";
  isDiv2Active: boolean = false;

  addRedColor(){
    this.div1bgColor = "bg-danger"
  }
  addBlueColor(){
    this.div1bgColor = "bg-primary"
  }

  changeValue(){
    if(this.isDiv2Active == true){
      this.isDiv2Active = false;
    }else{
      this.isDiv2Active = true;
    }
  }
  constructor(private router: Router) {

   }
   // for routing using ts

   navigateToStructural(){
    this.router.navigateByUrl("structural-dir")
   }
  ngOnInit() {
  }
}

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //string, int, boolean, date
  courseName:string = "Angular 18";
  inputType = "checkBox";
  rollNo:number = 12;
  isIndian:boolean = true;
  currentDate:Date = new Date();
  className:string = "bg-primary";
  firstName = signal("Himanshu");

  constructor(){

  }
  changeCourseName(){
    debugger
    this.courseName ="Reactjs";
    // signal name change
    this.firstName.set("Ramesh");
  }

  showAlert(message: string){
    debugger
    alert(message);
  }
}

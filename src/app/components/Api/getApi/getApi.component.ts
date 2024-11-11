import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getApi',
  standalone: true,
  templateUrl: './getApi.component.html',
  styleUrls: ['./getApi.component.css']
})
export class GetApiComponent implements OnInit {

  userList: any[] = [];
  // creating http client object without using dependency injection: After Angular 16
  // http = inject(HttpClient);
    
  // creating http client object using dependency injection
  constructor(private http: HttpClient) { }
  getAllUser(){
    const apiStri = "https://localhost:7169/api/Employees";
    this.http.get(apiStri).subscribe((result:any)=>{
      debugger
      console.log(result);
      this.userList = result;
    })
  }
  ngOnInit() {
  }

}

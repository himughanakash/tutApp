import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports:[FormsModule],
  selector: 'app-postApi',
  templateUrl: './postApi.component.html',
  styleUrls: ['./postApi.component.css']
})
export class PostApiComponent implements OnInit {

  name: string = '';
  email: string = '';
  phone: string = '';
  apiUrl: string = 'https://localhost:7169/api/Employees';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit(): void {
    const data = {
      name: this.name,
      email: this.email,
      phone: this.phone
    };

    // Send POST request
    this.http.post(this.apiUrl, data).subscribe({
      next: (response) => {
        console.log('Success:', response);
        alert('Data submitted successfully!');
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Error submitting data');
      }
    });
  }
}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GetApiComponent } from './components/Api/getApi/getApi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, GetApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutApp';
}

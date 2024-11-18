import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GetApiComponent } from './components/Api/getApi/getApi.component';
import { PostApiComponent } from './components/Api/getApi/postApi/postApi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, GetApiComponent, PostApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutApp';
}

import { Component } from '@angular/core';
import { AcessoComponent } from './acesso/acesso';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AcessoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
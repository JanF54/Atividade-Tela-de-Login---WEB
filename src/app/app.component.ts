import { Component } from '@angular/core';
import { AcessoComponent } from './acesso/acesso.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AcessoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}

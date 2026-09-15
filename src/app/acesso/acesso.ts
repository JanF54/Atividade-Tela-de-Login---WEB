import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acesso',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './acesso.html',
  styleUrl: './acesso.css'
})
export class AcessoComponent {

  email = '';
  senha = '';

  entrar(): void {
    console.log('Dados enviados pelo usuário:');
    console.log('E-mail:', this.email);
    console.log('Senha:', this.senha);
  }

  esqueciSenha(): void {
    console.log('Esqueci a senha');
    console.log('E-mail informado:', this.email);
  }

  criarConta(): void {
    console.log('Criar conta');
  }
}
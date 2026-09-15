import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acesso',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './acesso.component.html',
  styleUrl: './acesso.component.css'
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
    console.log('Opção selecionada: Esqueci a senha');
    console.log('E-mail informado:', this.email);
  }

  criarConta(): void {
    console.log('Opção selecionada: Criar conta');
  }
}

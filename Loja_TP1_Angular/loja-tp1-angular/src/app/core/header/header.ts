import { Component } from '@angular/core';

@Component({
  selector: 'app-header', // <app-header>
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  titulo = 'O site dos gigantes!';
  exibirSobre(nome: string): void {
    alert(`Olá, meu ${nome}!`); // Interpolação: inserção de valores dinâmicos em strings ou expressões
  }

}

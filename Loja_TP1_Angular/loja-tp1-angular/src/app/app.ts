import { Component, signal } from '@angular/core';
import { Header } from './core/header/header';
import { Footer } from "./core/footer/footer";
import { Banner } from './core/banner/banner';
import { QuantidadeControle } from "./shared/quantidade-controle/quantidade-controle";
import { Produto } from './model/produto';
import { CardProduto } from "./features/produtos/card-produto/card-produto";
import { ListaProdutos } from "./features/produtos/lista-produtos/lista-produtos";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Banner, ListaProdutos],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // Corrigido aqui
})
export class App {
  prod: Produto = {
    id: 1,
    nome: 'Produto 1',
    descricao: 'Descrição do Produto 1',
    preco: 179.90,
    nota: 0,
    imageURl: ''
  }
  sobre? : string; // sobre pode ser uma string ou undefined -> Union type

  qtd = signal(1);
  receberSobre(texto: string) {
    this.sobre = texto;
  }
}
import { Component } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Camisa Vasco III 24/25 s/n° Kombat Jogador Kappa Masculina - Bege',
      descricao: 'Descrição do Produto 1',
      preco: 218.49,
      imageURl: 'images/camisa_vasco_kombat.png',
      promo: true
    },
    {
      id: 2,
      nome: 'Camisa Vasco III 23/24 s/n° Jogador Kappa Masculina',
      descricao: 'Descrição do Produto 2',
      preco: 208.99,
      imageURl: 'images/camisa_vascoIII.png',
      promo: true
    },
    {
      id: 3,
      nome: 'Camisa Vasco III 23/24 s/n° Jogador Kappa Masculina - Preta e branca',
      descricao: 'Descrição do Produto 3',
      preco: 329.90,
      imageURl: 'images/camisa_vasco_polo.png'
    },
    {
      id: 4,
      nome: 'Regata Kappa Vasco Supporter Type Preta',
      descricao: 'Descrição do Produto 4',
      preco: 129.90,
      imageURl: 'images/regata_vasco.png'
    },
  ]

  onAddProduct(produto: {id: number, quantity: number}) {
    alert(`Produto ${produto.id}, ${produto.quantity} unidades`);

  }

}


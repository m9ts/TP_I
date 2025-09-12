import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrls: ['./lista-produtos.css']
})
export class ListaProdutos {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Camisa Vasco III 24/25',
      descricao: 'Cor: Bege',
      preco: 218.49,
      imageURl: 'images/camisa_vasco_kombat.png',
      promo: true,
      nota: 0,
      estado: 'usado'
    },
    {
      id: 2,
      nome: 'Camisa Vasco III',
      descricao: 'Cor: Preta',
      preco: 208.99,
      imageURl: 'images/camisa_vascoIII.png',
      promo: true,
      nota: 0,
      estado: 'novo'
    },
    {
      id: 3,
      nome: 'Camisa Vasco III 23/24',
      descricao: 'Cor: Preta e branca',
      preco: 329.90,
      imageURl: 'images/camisa_vasco_polo.png',
      nota: 0,
      estado: 'esgotado'
    },
    {
      id: 4,
      nome: 'Regata Kappa Vasco Supporter Type',
      descricao: 'Cor: Preta',
      preco: 129.90,
      imageURl: 'images/regata_vasco.png',
      nota: 0,
      estado: 'novo'
    },
  ]

  apenasPromo = signal(false);

  prodExibidos = computed(() => this.apenasPromo() ? this.produtos.filter(p => p.promo) : this.produtos);

  alternarPromo() {
    this.apenasPromo.update(p => !p); // Função para alternar seção de promoções
  }

  onAddProduct(produto: { id: number, quantity: number }) {
    alert(`Produto ${produto.id}, ${produto.quantity} unidades`);
  }

  onViewProduct(id: number) {
    alert(`Id do produto: ${id}`);
  }
}
import { Component, computed, inject, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";
import { ProdutoService } from '../services/produto.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrls: ['./lista-produtos.css']
})
export class ListaProdutos {
  private produtoService = inject(ProdutoService); 
  private router = inject(Router);

  private produtos = toSignal<Produto[], Produto[]>(
    this.produtoService.listar(), { initialValue: [] }
  );

  apenasPromo = signal(false);

  prodExibidos = computed(() => this.apenasPromo() ? this.produtos().filter(p => p.promo) : this.produtos());

  alternarPromo() {
    this.apenasPromo.update(p => !p); // Função para alternar seção de promoções
  }

  onAddProduct(produto: { id: number, quantity: number }) {
    alert(`Produto ${produto.id}, ${produto.quantity} unidades`);
  }

  onViewProduct(id: number) {
    this.router.navigate(['/produtos', id]);
  }
}
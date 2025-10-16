import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { QuantidadeControle } from "../../../shared/quantidade-controle/quantidade-controle";
import { CurrencyPipe } from '@angular/common';
import { AvaliacaoProduto } from "../avaliacao-produto/avaliacao-produto";
import { DescontoPipe } from '../../../shared/pipes/desconto-pipe';

@Component({
  selector: 'app-card-produto',
  imports: [QuantidadeControle, CurrencyPipe, AvaliacaoProduto, DescontoPipe],
  templateUrl: './card-produto.html',
  styleUrls: ['./card-produto.css']
})
export class CardProduto {
  // Input obrigatório
  @Input({ required: true }) produto!: Produto;

  // Signal para quantidade
  qtde = signal<number>(0);

  // Outputs
  @Output() add = new EventEmitter<{ id: number, quantity: number }>();
  @Output() view = new EventEmitter<number>();

  // Adicionar produto
  onAdd() {
    this.add.emit({ id: this.produto.id, quantity: this.qtde() });
  }

  // Ver detalhes do produto
  onView() {
    this.view.emit(this.produto.id);
  }
}

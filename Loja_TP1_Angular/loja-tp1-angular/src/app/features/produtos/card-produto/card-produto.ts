import { Component, input, model, output, signal } from '@angular/core';
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
  produto = input.required<Produto>(); // input.required "força" a inserção

  qtde = signal<number>(0);

  add = output<({ id: number, quantity: number })>();
  view = output<number>();

  onAdd() {
    this.add.emit({ id: this.produto().id, quantity: this.qtde() });
  }

  onView() {
    this.view.emit(this.produto().id);
  }

}

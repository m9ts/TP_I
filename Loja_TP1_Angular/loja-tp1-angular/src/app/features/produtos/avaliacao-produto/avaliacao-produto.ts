import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avaliacao-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avaliacao-produto.html',
  styleUrls: ['./avaliacao-produto.css']
})
export class AvaliacaoProduto {
  @Input() nota: number = 0;
  @Output() notaChange = new EventEmitter<number>();

  avaliar(n: number) {
    this.nota = n;
    this.notaChange.emit(this.nota);
  }
}
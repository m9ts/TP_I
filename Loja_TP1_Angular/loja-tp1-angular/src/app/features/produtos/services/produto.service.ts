import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto } from '../../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  logger = inject(LoggerService);

  // Lista somente para exibição
  private readonly listaMock: Produto[] = [
      {
        id: 1,
        nome: 'Camisa Vasco III 24/25',
        descricao: 'Cor: Bege',
        preco: 218.49,
        imageURl: 'images/camisa_vasco_kombat.png',
        promo: true,
        nota: 0,
        estado: 'novo'
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
    ];

    listar(): Observable <Produto[]> {
      this.logger.info('[ProdutoService] - Listando produtos');
      return of(this.listaMock).pipe(delay(500)); // Transformando a lista em Observable com of
    }

    getById(id: number): Observable<Produto | undefined> {
      return of(this.listaMock.find(p => p.id == id)).pipe(delay(500));
    }
  }



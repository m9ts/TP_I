import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto, ProdutoMapper } from '../../../model/produto';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  logger = inject(LoggerService);
  private http = inject(HttpClient);

  private apiUrl = 'https://fakestoreapi.com/products';

  // Lista somente para exibição
  private readonly listaMock: Produto[] = [
    {
      id: 1,
      nome: 'Camisa Vasco III 24/25',
      descricao: 'Cor: Bege',
      preco: 218.49,
      imageUrl: 'images/camisa_vasco_kombat.png',
      promo: true,
      nota: 0,
      estado: 'novo'
    },
    {
      id: 2,
      nome: 'Camisa Vasco III',
      descricao: 'Cor: Preta',
      preco: 208.99,
      imageUrl: 'images/camisa_vascoIII.png',
      promo: true,
      nota: 0,
      estado: 'novo'
    },
    {
      id: 3,
      nome: 'Camisa Vasco III 23/24',
      descricao: 'Cor: Preta e branca',
      preco: 329.90,
      imageUrl: 'images/camisa_vasco_polo.png',
      nota: 0,
      estado: 'esgotado'
    },
    {
      id: 4,
      nome: 'Regata Kappa Vasco Supporter Type',
      descricao: 'Cor: Preta',
      preco: 129.90,
      imageUrl: 'images/regata_vasco.png',
      nota: 0,
      estado: 'novo'
    },
  ];


  listar(): Observable<Produto[]> {
    this.logger.info('[ProdutoService] listar() - consumindo API externa');
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(lista => lista.map(item => ProdutoMapper.fromJson(item))), // Retornará a lista observable montada pelo map
      catchError(err => {
        this.logger.error('[ProdutoService] erro ao listar produtos!', err); // Em caso de erro, retornará um observable vazio
        return of([]);
      })
    );
  }

  getById(id: number): Observable<Produto | undefined> {
    return of(this.listaMock.find(p => p.id == id)).pipe(delay(500));
  }
}

import { Component } from '@angular/core';
import { ListaProdutos } from '../produtos/lista-produtos/lista-produtos';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ListaProdutos, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

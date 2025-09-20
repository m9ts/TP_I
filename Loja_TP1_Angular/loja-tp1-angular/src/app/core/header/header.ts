import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header', // <app-header>
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  tituloLoja = input.required<string>(); // <app-header [tituloLoja]="'Titulo'"> </app-header>

  textoSobre = output<string>();

  enviarSobre(): void {
    this.textoSobre.emit('Técnicas de Programação I - Desenvolvido por Mateus Gois Silva'); // O valor deve ser do mesmo tipo que o declarado em output<>
    
  }
}

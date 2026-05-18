import { Component, input } from '@angular/core';
import { InterfaceJogo } from './interface-jogo';

@Component({
  selector: 'app-jogo',
  imports: [],
  templateUrl: './jogo.html',
  styleUrl: './jogo.css',
})
export class Jogo {
  jogo = input.required<InterfaceJogo>();

  alternarFavorito() {
    this.jogo().favorito = !this.jogo().favorito;
  }
}

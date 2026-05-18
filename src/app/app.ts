import { Component, signal } from '@angular/core';
import { Cabecalho } from "./componentes/cabecalho/cabecalho";
import { Rodape } from "./componentes/rodape/rodape";
import { ListaJogos } from "./componentes/lista-jogos/lista-jogos";

@Component({
  selector: 'app-root',
  imports: [
    Cabecalho,
    Rodape,
    ListaJogos
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}

import { Component, OnInit } from '@angular/core';
import { jogosRetro } from '../../mock-jogosRetro';
import { InterfaceConsole, InterfaceJogo } from '../jogo/interface-jogo';
import { EstiloConsole } from "../estilo-console/estilo-console";

@Component({
  selector: 'app-lista-jogos',
  imports: [EstiloConsole],
  templateUrl: './lista-jogos.html',
  styleUrl: './lista-jogos.css',
})
export class ListaJogos implements OnInit {
  consoles: InterfaceConsole[] = [];

  // Lista fixa de consoles para garantir que apareçam mesmo sem jogos
  listaConsoles = [
    { id: 'super-nintendo', value: 'Super Nintendo' },
    { id: 'neo-geo', value: 'Neo Geo' },
    { id: 'playstation-1', value: 'PlayStation 1' },
    { id: 'dreamcast', value: 'Dreamcast' },
    { id: 'playstation-2', value: 'PlayStation 2' }
  ];

  ngOnInit() {
    this.consoles = this.listaConsoles.map(console => {
      const jogosDoConsole = jogosRetro.filter(jogo => jogo.genero.id === console.id);
      return {
        id: console.id,
        value: console.value,
        jogos: jogosDoConsole
      };
    });
  }
}

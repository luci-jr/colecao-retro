import { Component, input } from '@angular/core';
import { Jogo } from "../jogo/jogo";
import { InterfaceConsole } from '../jogo/interface-jogo';

@Component({
  selector: 'app-estilo-console',
  imports: [ Jogo ],
  templateUrl: './estilo-console.html',
  styleUrl: './estilo-console.css',
})
export class EstiloConsole {

  genero = input.required<InterfaceConsole>();

}

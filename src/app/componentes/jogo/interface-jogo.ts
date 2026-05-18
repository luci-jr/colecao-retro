export interface InterfaceJogo {
  titulo: string;
  autor: string;
  imagem: string;
  favorito: boolean;
  genero: InterfaceConsole;
}

export interface InterfaceConsole {
  id: string;
  value: string;
  jogos: InterfaceJogo[];
}

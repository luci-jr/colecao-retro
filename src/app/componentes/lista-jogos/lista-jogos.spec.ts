import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJogos } from './lista-jogos';

describe('ListaJogos', () => {
  let component: ListaJogos;
  let fixture: ComponentFixture<ListaJogos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaJogos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaJogos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

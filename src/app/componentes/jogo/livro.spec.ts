import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livro } from './livro';
import { livros } from '../../mock-livros';

describe('Livro', () => {
  let component: Livro;
  let fixture: ComponentFixture<Livro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livro],
    }).compileComponents();

    fixture = TestBed.createComponent(Livro);
    fixture.componentRef.setInput('livro', livros[0]);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

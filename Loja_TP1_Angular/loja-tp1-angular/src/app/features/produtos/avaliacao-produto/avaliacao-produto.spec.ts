import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoProduto } from './avaliacao-produto';

describe('AvaliacaoProduto', () => {
  let component: AvaliacaoProduto;
  let fixture: ComponentFixture<AvaliacaoProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

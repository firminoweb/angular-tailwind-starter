import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRacasComponent } from './lista-racas.component';

describe('ListaRacasComponent', () => {
  let component: ListaRacasComponent;
  let fixture: ComponentFixture<ListaRacasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRacasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRacasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

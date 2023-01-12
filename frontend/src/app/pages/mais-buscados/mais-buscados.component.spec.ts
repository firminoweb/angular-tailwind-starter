import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisBuscadosComponent } from './mais-buscados.component';

describe('MaisBuscadosComponent', () => {
  let component: MaisBuscadosComponent;
  let fixture: ComponentFixture<MaisBuscadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisBuscadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaisBuscadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

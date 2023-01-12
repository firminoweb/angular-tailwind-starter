import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatosComponent } from './gatos.component';

describe('GatosComponent', () => {
  let component: GatosComponent;
  let fixture: ComponentFixture<GatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

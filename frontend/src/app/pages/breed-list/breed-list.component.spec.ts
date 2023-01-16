import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedListComponent } from './breed-list.component';

describe('BreedListComponent', () => {
  let component: BreedListComponent;
  let fixture: ComponentFixture<BreedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

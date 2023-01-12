import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestCatsComponent } from './latest-cats.component';

describe('CatListComponent', () => {
  let component: LatestCatsComponent;
  let fixture: ComponentFixture<LatestCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestCatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

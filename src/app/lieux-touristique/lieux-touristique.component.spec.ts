import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxTouristiqueComponent } from './lieux-touristique.component';

describe('LieuxTouristiqueComponent', () => {
  let component: LieuxTouristiqueComponent;
  let fixture: ComponentFixture<LieuxTouristiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LieuxTouristiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LieuxTouristiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

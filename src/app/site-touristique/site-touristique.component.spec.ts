import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTouristiqueComponent } from './site-touristique.component';

describe('SiteTouristiqueComponent', () => {
  let component: SiteTouristiqueComponent;
  let fixture: ComponentFixture<SiteTouristiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteTouristiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteTouristiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

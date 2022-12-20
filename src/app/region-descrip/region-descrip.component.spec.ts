import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionDescripComponent } from './region-descrip.component';

describe('RegionDescripComponent', () => {
  let component: RegionDescripComponent;
  let fixture: ComponentFixture<RegionDescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionDescripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionDescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

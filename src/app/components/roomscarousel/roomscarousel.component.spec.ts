import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomscarouselComponent } from './roomscarousel.component';

describe('RoomscarouselComponent', () => {
  let component: RoomscarouselComponent;
  let fixture: ComponentFixture<RoomscarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomscarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomscarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

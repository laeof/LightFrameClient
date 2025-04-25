import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomRentComponent } from './room-rent.component';

describe('RoomRentComponent', () => {
  let component: RoomRentComponent;
  let fixture: ComponentFixture<RoomRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomRentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

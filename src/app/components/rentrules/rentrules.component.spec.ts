import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentrulesComponent } from './rentrules.component';

describe('RentrulesComponent', () => {
  let component: RentrulesComponent;
  let fixture: ComponentFixture<RentrulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentrulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

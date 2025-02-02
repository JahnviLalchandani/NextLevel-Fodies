import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseMealsComponent } from './browse-meals.component';

describe('BrowseMealsComponent', () => {
  let component: BrowseMealsComponent;
  let fixture: ComponentFixture<BrowseMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseMealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

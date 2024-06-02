import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodiesCommunityComponent } from './foodies-community.component';

describe('FoodiesCommunityComponent', () => {
  let component: FoodiesCommunityComponent;
  let fixture: ComponentFixture<FoodiesCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodiesCommunityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodiesCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionHeaderComponent } from './promotion-header.component';

describe('PromotionHeaderComponent', () => {
  let component: PromotionHeaderComponent;
  let fixture: ComponentFixture<PromotionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePortfolioItemComponent } from './single-portfolio-item.component';

describe('SinglePortfolioItemComponent', () => {
  let component: SinglePortfolioItemComponent;
  let fixture: ComponentFixture<SinglePortfolioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePortfolioItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePortfolioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRecipeItemComponent } from './no-recipe-item.component';

describe('NoRecipeItemComponent', () => {
  let component: NoRecipeItemComponent;
  let fixture: ComponentFixture<NoRecipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoRecipeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRecipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSafetyComponent } from './type-safety.component';

describe('TypeSafetyComponent', () => {
  let component: TypeSafetyComponent;
  let fixture: ComponentFixture<TypeSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeSafetyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

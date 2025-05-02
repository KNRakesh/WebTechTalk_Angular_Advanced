import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOneComponent } from './parent-one.component';

describe('ParentOneComponent', () => {
  let component: ParentOneComponent;
  let fixture: ComponentFixture<ParentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrakComponent } from './patrak.component';

describe('PatrakComponent', () => {
  let component: PatrakComponent;
  let fixture: ComponentFixture<PatrakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatrakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

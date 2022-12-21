import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcalculatorComponent } from './shortcalculator.component';

describe('ShortcalculatorComponent', () => {
  let component: ShortcalculatorComponent;
  let fixture: ComponentFixture<ShortcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortcalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

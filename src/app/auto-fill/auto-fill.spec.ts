import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFill } from './auto-fill';

describe('AutoFill', () => {
  let component: AutoFill;
  let fixture: ComponentFixture<AutoFill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoFill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoFill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

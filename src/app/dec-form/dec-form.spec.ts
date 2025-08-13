import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecForm } from './dec-form';

describe('DecForm', () => {
  let component: DecForm;
  let fixture: ComponentFixture<DecForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

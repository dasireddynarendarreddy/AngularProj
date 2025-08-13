import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendComp } from './friend-comp';

describe('FriendComp', () => {
  let component: FriendComp;
  let fixture: ComponentFixture<FriendComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewposterComponent } from './newposter.component';

describe('NewposterComponent', () => {
  let component: NewposterComponent;
  let fixture: ComponentFixture<NewposterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewposterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewposterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

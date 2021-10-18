import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newposter3Component } from './newposter3.component';

describe('Newposter3Component', () => {
  let component: Newposter3Component;
  let fixture: ComponentFixture<Newposter3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newposter3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Newposter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

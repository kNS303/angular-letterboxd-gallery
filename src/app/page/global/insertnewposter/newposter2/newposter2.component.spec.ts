import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newposter2Component } from './newposter2.component';

describe('Newposter2Component', () => {
  let component: Newposter2Component;
  let fixture: ComponentFixture<Newposter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newposter2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Newposter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

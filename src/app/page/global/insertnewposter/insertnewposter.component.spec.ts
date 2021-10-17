import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertnewposterComponent } from './insertnewposter.component';

describe('InsertnewposterComponent', () => {
  let component: InsertnewposterComponent;
  let fixture: ComponentFixture<InsertnewposterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertnewposterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertnewposterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

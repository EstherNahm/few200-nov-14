import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathgameComponent } from './mathgame.component';

describe('MathgameComponent', () => {
  let component: MathgameComponent;
  let fixture: ComponentFixture<MathgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

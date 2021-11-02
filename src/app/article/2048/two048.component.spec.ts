import { ComponentFixture, TestBed } from '@angular/core/testing';

import { two048Component } from './two048.component';

describe('two048Component', () => {
  let component: two048Component;
  let fixture: ComponentFixture<two048Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ two048Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(two048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

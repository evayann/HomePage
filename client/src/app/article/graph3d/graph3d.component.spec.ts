import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph3dComponent } from './graph3d.component';

describe('Graph3dComponent', () => {
  let component: Graph3dComponent;
  let fixture: ComponentFixture<Graph3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graph3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

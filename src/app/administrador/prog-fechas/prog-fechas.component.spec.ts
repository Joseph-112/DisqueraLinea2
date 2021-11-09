import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgFechasComponent } from './prog-fechas.component';

describe('ProgFechasComponent', () => {
  let component: ProgFechasComponent;
  let fixture: ComponentFixture<ProgFechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgFechasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

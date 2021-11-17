import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionOpComponent } from './cancion-op.component';

describe('CancionOpComponent', () => {
  let component: CancionOpComponent;
  let fixture: ComponentFixture<CancionOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionOpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

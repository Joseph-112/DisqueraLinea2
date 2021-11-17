import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCancionEliminarComponent } from './form-cancion-eliminar.component';

describe('FormCancionEliminarComponent', () => {
  let component: FormCancionEliminarComponent;
  let fixture: ComponentFixture<FormCancionEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCancionEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCancionEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

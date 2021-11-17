import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArtistaEliminarComponent } from './form-artista-eliminar.component';

describe('FormArtistaEliminarComponent', () => {
  let component: FormArtistaEliminarComponent;
  let fixture: ComponentFixture<FormArtistaEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArtistaEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArtistaEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArtistaEditarComponent } from './form-artista-editar.component';

describe('FormArtistaEditarComponent', () => {
  let component: FormArtistaEditarComponent;
  let fixture: ComponentFixture<FormArtistaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArtistaEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArtistaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

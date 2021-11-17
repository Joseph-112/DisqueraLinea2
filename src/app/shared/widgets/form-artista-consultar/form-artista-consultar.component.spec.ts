import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArtistaConsultarComponent } from './form-artista-consultar.component';

describe('FormArtistaConsultarComponent', () => {
  let component: FormArtistaConsultarComponent;
  let fixture: ComponentFixture<FormArtistaConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArtistaConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArtistaConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

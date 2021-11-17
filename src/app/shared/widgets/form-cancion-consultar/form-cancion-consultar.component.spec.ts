import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCancionConsultarComponent } from './form-cancion-consultar.component';

describe('FormCancionConsultarComponent', () => {
  let component: FormCancionConsultarComponent;
  let fixture: ComponentFixture<FormCancionConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCancionConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCancionConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

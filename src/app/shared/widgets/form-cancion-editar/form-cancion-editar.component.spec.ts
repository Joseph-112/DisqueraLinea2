import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCancionEditarComponent } from './form-cancion-editar.component';

describe('FormCancionEditarComponent', () => {
  let component: FormCancionEditarComponent;
  let fixture: ComponentFixture<FormCancionEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCancionEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCancionEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

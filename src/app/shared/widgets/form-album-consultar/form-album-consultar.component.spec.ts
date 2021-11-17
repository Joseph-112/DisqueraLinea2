import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlbumConsultarComponent } from './form-album-consultar.component';

describe('FormAlbumConsultarComponent', () => {
  let component: FormAlbumConsultarComponent;
  let fixture: ComponentFixture<FormAlbumConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlbumConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlbumConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

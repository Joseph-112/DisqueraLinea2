import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlbumEditarComponent } from './form-album-editar.component';

describe('FormAlbumEditarComponent', () => {
  let component: FormAlbumEditarComponent;
  let fixture: ComponentFixture<FormAlbumEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlbumEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlbumEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

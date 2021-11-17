import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlbumEliminarComponent } from './form-album-eliminar.component';

describe('FormAlbumEliminarComponent', () => {
  let component: FormAlbumEliminarComponent;
  let fixture: ComponentFixture<FormAlbumEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlbumEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlbumEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

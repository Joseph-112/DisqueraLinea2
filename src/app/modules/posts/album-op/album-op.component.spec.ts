import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumOpComponent } from './album-op.component';

describe('AlbumOpComponent', () => {
  let component: AlbumOpComponent;
  let fixture: ComponentFixture<AlbumOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumOpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

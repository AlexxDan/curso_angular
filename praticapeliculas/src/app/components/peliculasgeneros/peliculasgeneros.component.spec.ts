import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasgenerosComponent } from './peliculasgeneros.component';

describe('PeliculasgenerosComponent', () => {
  let component: PeliculasgenerosComponent;
  let fixture: ComponentFixture<PeliculasgenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasgenerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasgenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

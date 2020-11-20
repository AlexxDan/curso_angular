import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPersonajeComponent } from './insertar-personaje.component';

describe('InsertarPersonajeComponent', () => {
  let component: InsertarPersonajeComponent;
  let fixture: ComponentFixture<InsertarPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

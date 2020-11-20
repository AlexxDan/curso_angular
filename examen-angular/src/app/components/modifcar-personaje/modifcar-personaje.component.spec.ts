import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifcarPersonajeComponent } from './modifcar-personaje.component';

describe('ModifcarPersonajeComponent', () => {
  let component: ModifcarPersonajeComponent;
  let fixture: ComponentFixture<ModifcarPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifcarPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifcarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

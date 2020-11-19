import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizadosComponent } from './actualizados.component';

describe('ActualizadosComponent', () => {
  let component: ActualizadosComponent;
  let fixture: ComponentFixture<ActualizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

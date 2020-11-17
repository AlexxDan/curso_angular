import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallempleadosComponent } from './detallempleados.component';

describe('DetallempleadosComponent', () => {
  let component: DetallempleadosComponent;
  let fixture: ComponentFixture<DetallempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallempleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

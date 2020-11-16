import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosalarioComponent } from './empleadosalario.component';

describe('EmpleadosalarioComponent', () => {
  let component: EmpleadosalarioComponent;
  let fixture: ComponentFixture<EmpleadosalarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosalarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

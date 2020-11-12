import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroaleatorioComponent } from './numeroaleatorio.component';

describe('NumeroaleatorioComponent', () => {
  let component: NumeroaleatorioComponent;
  let fixture: ComponentFixture<NumeroaleatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeroaleatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroaleatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

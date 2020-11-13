import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrecontadoresComponent } from './padrecontadores.component';

describe('PadrecontadoresComponent', () => {
  let component: PadrecontadoresComponent;
  let fixture: ComponentFixture<PadrecontadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrecontadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadrecontadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

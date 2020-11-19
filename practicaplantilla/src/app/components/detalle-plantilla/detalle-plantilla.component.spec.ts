import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePlantillaComponent } from './detalle-plantilla.component';

describe('DetallePlantillaComponent', () => {
  let component: DetallePlantillaComponent;
  let fixture: ComponentFixture<DetallePlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

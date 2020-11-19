import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModicarPlantillaComponent } from './modicar-plantilla.component';

describe('ModicarPlantillaComponent', () => {
  let component: ModicarPlantillaComponent;
  let fixture: ComponentFixture<ModicarPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModicarPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModicarPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumarnumeroComponent } from './sumarnumero.component';

describe('SumarnumeroComponent', () => {
  let component: SumarnumeroComponent;
  let fixture: ComponentFixture<SumarnumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumarnumeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumarnumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

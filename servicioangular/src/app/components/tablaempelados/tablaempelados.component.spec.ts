import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaempeladosComponent } from './tablaempelados.component';

describe('TablaempeladosComponent', () => {
  let component: TablaempeladosComponent;
  let fixture: ComponentFixture<TablaempeladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaempeladosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaempeladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

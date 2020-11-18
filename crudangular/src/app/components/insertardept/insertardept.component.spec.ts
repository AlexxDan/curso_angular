import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertardeptComponent } from './insertardept.component';

describe('InsertardeptComponent', () => {
  let component: InsertardeptComponent;
  let fixture: ComponentFixture<InsertardeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertardeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertardeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

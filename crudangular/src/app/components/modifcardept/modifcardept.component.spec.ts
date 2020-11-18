import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifcardeptComponent } from './modifcardept.component';

describe('ModifcardeptComponent', () => {
  let component: ModifcardeptComponent;
  let fixture: ComponentFixture<ModifcardeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifcardeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifcardeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

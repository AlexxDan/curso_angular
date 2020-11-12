import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjeturacollatzComponent } from './conjeturacollatz.component';

describe('ConjeturacollatzComponent', () => {
  let component: ConjeturacollatzComponent;
  let fixture: ComponentFixture<ConjeturacollatzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConjeturacollatzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjeturacollatzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

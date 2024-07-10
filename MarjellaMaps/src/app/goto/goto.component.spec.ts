import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoComponent } from './goto.component';

describe('GotoComponent', () => {
  let component: GotoComponent;
  let fixture: ComponentFixture<GotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

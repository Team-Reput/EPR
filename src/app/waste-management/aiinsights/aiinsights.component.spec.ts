import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiinsightsComponent } from './aiinsights.component';

describe('AiinsightsComponent', () => {
  let component: AiinsightsComponent;
  let fixture: ComponentFixture<AiinsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiinsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiinsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteAnalysisComponent } from './waste-analysis.component';

describe('WasteAnalysisComponent', () => {
  let component: WasteAnalysisComponent;
  let fixture: ComponentFixture<WasteAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WasteAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasteAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

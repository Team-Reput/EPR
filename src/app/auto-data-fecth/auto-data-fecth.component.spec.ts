import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDataFecthComponent } from './auto-data-fecth.component';

describe('AutoDataFecthComponent', () => {
  let component: AutoDataFecthComponent;
  let fixture: ComponentFixture<AutoDataFecthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoDataFecthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoDataFecthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

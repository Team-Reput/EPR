import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerLoopComponent } from './consumer-loop.component';

describe('ConsumerLoopComponent', () => {
  let component: ConsumerLoopComponent;
  let fixture: ComponentFixture<ConsumerLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumerLoopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

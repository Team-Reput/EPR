import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclerPortalComponent } from './recycler-portal.component';

describe('RecyclerPortalComponent', () => {
  let component: RecyclerPortalComponent;
  let fixture: ComponentFixture<RecyclerPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecyclerPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecyclerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

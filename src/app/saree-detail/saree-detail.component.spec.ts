import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SareeDetailComponent } from './saree-detail.component';

describe('SareeDetailComponent', () => {
  let component: SareeDetailComponent;
  let fixture: ComponentFixture<SareeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SareeDetailComponent]
    });
    fixture = TestBed.createComponent(SareeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

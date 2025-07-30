import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SareeListComponent } from './saree-list.component';

describe('SareeListComponent', () => {
  let component: SareeListComponent;
  let fixture: ComponentFixture<SareeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SareeListComponent]
    });
    fixture = TestBed.createComponent(SareeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

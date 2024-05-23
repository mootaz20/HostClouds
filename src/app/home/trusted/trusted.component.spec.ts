import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRUSTEDComponent } from './trusted.component';

describe('TRUSTEDComponent', () => {
  let component: TRUSTEDComponent;
  let fixture: ComponentFixture<TRUSTEDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TRUSTEDComponent]
    });
    fixture = TestBed.createComponent(TRUSTEDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

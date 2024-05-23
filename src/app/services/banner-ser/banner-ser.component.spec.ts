import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSerComponent } from './banner-ser.component';

describe('BannerSerComponent', () => {
  let component: BannerSerComponent;
  let fixture: ComponentFixture<BannerSerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerSerComponent]
    });
    fixture = TestBed.createComponent(BannerSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

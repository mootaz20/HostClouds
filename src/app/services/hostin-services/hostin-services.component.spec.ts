import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostinServicesComponent } from './hostin-services.component';

describe('HostinServicesComponent', () => {
  let component: HostinServicesComponent;
  let fixture: ComponentFixture<HostinServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostinServicesComponent]
    });
    fixture = TestBed.createComponent(HostinServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

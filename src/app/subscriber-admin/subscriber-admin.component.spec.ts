import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberAdminComponent } from './subscriber-admin.component';

describe('SubscriberAdminComponent', () => {
  let component: SubscriberAdminComponent;
  let fixture: ComponentFixture<SubscriberAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

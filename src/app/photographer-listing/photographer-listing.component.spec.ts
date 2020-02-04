import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerListingComponent } from './photographer-listing.component';

describe('PhotographerListingComponent', () => {
  let component: PhotographerListingComponent;
  let fixture: ComponentFixture<PhotographerListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographerListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

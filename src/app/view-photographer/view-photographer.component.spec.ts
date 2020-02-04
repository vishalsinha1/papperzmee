import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPhotographerComponent } from './view-photographer.component';

describe('ViewPhotographerComponent', () => {
  let component: ViewPhotographerComponent;
  let fixture: ComponentFixture<ViewPhotographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPhotographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPhotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReclamoComponent } from './view-reclamo.component';

describe('ViewReclamoComponent', () => {
  let component: ViewReclamoComponent;
  let fixture: ComponentFixture<ViewReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

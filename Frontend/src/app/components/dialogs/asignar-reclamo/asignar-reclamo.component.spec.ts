import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarReclamoComponent } from './asignar-reclamo.component';

describe('AsignarReclamoComponent', () => {
  let component: AsignarReclamoComponent;
  let fixture: ComponentFixture<AsignarReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

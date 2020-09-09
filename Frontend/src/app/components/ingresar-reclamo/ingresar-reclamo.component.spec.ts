import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarReclamoComponent } from './ingresar-reclamo.component';

describe('IngresarReclamoComponent', () => {
  let component: IngresarReclamoComponent;
  let fixture: ComponentFixture<IngresarReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

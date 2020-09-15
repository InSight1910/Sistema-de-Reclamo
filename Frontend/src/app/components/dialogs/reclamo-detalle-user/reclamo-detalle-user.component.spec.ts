import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamoDetalleUSerComponent } from './reclamo-detalle-user.component';

describe('ReclamoDetalleUSerComponent', () => {
  let component: ReclamoDetalleUSerComponent;
  let fixture: ComponentFixture<ReclamoDetalleUSerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamoDetalleUSerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamoDetalleUSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

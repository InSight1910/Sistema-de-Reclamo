import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaAdminComponent } from './respuesta-admin.component';

describe('RespuestaAdminComponent', () => {
  let component: RespuestaAdminComponent;
  let fixture: ComponentFixture<RespuestaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

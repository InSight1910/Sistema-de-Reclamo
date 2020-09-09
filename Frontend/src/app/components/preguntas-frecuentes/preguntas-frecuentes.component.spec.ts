import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasFrecuentesComponent } from './preguntas-frecuentes.component';

describe('PreguntasFrecuentesComponent', () => {
  let component: PreguntasFrecuentesComponent;
  let fixture: ComponentFixture<PreguntasFrecuentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntasFrecuentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

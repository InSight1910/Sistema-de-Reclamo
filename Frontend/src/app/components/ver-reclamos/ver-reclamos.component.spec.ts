import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReclamosComponent } from './ver-reclamos.component';

describe('VerReclamosComponent', () => {
  let component: VerReclamosComponent;
  let fixture: ComponentFixture<VerReclamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerReclamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

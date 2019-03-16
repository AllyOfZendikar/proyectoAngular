import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionEquiposComponent } from './informacion-equipos.component';

describe('InformacionEquiposComponent', () => {
  let component: InformacionEquiposComponent;
  let fixture: ComponentFixture<InformacionEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaFacturasIngComponent } from './alta-facturas-ing.component';

describe('AltaFacturasIngComponent', () => {
  let component: AltaFacturasIngComponent;
  let fixture: ComponentFixture<AltaFacturasIngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaFacturasIngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaFacturasIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

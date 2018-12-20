import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaFacturaComponent } from './alta-factura.component';

describe('AltaFacturaComponent', () => {
  let component: AltaFacturaComponent;
  let fixture: ComponentFixture<AltaFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaProveedComponent } from './baja-proveed.component';

describe('BajaProveedComponent', () => {
  let component: BajaProveedComponent;
  let fixture: ComponentFixture<BajaProveedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaProveedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaProveedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

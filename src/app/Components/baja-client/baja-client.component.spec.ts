import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaClientComponent } from './baja-client.component';

describe('BajaClientComponent', () => {
  let component: BajaClientComponent;
  let fixture: ComponentFixture<BajaClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

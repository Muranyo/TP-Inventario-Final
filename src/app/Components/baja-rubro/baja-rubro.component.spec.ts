import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaRubroComponent } from './baja-rubro.component';

describe('BajaRubroComponent', () => {
  let component: BajaRubroComponent;
  let fixture: ComponentFixture<BajaRubroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaRubroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaRubroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

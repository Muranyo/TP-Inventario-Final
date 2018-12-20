import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaProveedComponent } from './alta-proveed.component';

describe('AltaProveedComponent', () => {
  let component: AltaProveedComponent;
  let fixture: ComponentFixture<AltaProveedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaProveedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaProveedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaClientComponent } from './alta-client.component';

describe('AltaClientComponent', () => {
  let component: AltaClientComponent;
  let fixture: ComponentFixture<AltaClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

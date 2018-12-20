import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaArtComponent } from './alta-art.component';

describe('AltaArtComponent', () => {
  let component: AltaArtComponent;
  let fixture: ComponentFixture<AltaArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

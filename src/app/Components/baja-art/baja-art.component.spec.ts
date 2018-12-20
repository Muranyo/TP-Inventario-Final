import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaArtComponent } from './baja-art.component';

describe('BajaArtComponent', () => {
  let component: BajaArtComponent;
  let fixture: ComponentFixture<BajaArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

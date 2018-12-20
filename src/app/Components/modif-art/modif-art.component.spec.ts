import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifArtComponent } from './modif-art.component';

describe('ModifArtComponent', () => {
  let component: ModifArtComponent;
  let fixture: ComponentFixture<ModifArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

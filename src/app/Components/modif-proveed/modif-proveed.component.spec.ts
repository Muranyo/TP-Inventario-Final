import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProveedComponent } from './modif-proveed.component';

describe('ModifProveedComponent', () => {
  let component: ModifProveedComponent;
  let fixture: ComponentFixture<ModifProveedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifProveedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifProveedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

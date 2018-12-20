import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifRubroComponent } from './modif-rubro.component';

describe('ModifRubroComponent', () => {
  let component: ModifRubroComponent;
  let fixture: ComponentFixture<ModifRubroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifRubroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifRubroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

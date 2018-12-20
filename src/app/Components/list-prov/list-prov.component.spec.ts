import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProvComponent } from './list-prov.component';

describe('ListProvComponent', () => {
  let component: ListProvComponent;
  let fixture: ComponentFixture<ListProvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

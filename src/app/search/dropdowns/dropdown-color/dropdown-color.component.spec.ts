import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownColorComponent } from './dropdown-color.component';

describe('DropdownColorComponent', () => {
  let component: DropdownColorComponent;
  let fixture: ComponentFixture<DropdownColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

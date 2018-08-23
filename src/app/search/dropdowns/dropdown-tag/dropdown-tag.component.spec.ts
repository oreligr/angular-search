import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTagComponent } from './dropdown-tag.component';

describe('DropdownTagComponent', () => {
  let component: DropdownTagComponent;
  let fixture: ComponentFixture<DropdownTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

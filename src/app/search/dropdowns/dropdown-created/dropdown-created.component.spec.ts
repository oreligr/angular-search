import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCreatedComponent } from './dropdown-created.component';

describe('DropdownCreatedComponent', () => {
  let component: DropdownCreatedComponent;
  let fixture: ComponentFixture<DropdownCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

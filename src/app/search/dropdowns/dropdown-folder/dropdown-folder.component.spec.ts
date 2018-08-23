import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownFolderComponent } from './dropdown-folder.component';

describe('DropdownFolderComponent', () => {
  let component: DropdownFolderComponent;
  let fixture: ComponentFixture<DropdownFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

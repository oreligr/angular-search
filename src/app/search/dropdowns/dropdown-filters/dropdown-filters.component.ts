import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-filters',
  templateUrl: './dropdown-filters.component.html',
  styleUrls: ['./dropdown-filters.component.css']
})
export class DropdownFiltersComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangeDropDown = new EventEmitter<string>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangeSearchText = new EventEmitter<string>();
  @Input() recentSearchs: Array<string>;

  filtersIndex = 3;
  showMoreBool = true;

  filters = [
    {name: 'Folder', img: 'assets/img/icons/filters/ic-folder-dark-16.svg', dropdown: 'folders'},
    {name: 'Tag', img: 'assets/img/icons/filters/ic-tags-dark-16.svg', dropdown: 'tags'},
    {name: 'Created', img: 'assets/img/icons/filters/ic-calendar-dark-16.svg', dropdown: 'celendar'},
    {name: 'File', img: 'assets/img/icons/filters/ic-files-dark-16.svg'},
    {name: 'Todo', img: 'assets/img/icons/filters/ic-todo-rounded-dark-16.svg'},
    {name: 'Encrypted', img: 'assets/img/icons/filters/ic-lock-dark-16.svg'},
    {name: 'Highlight', img: 'assets/img/icons/filters/ic-highlights-dark-blue-16.svg'},
    {name: 'Links', img: 'assets/img/icons/filters/ic-web-dark-16.svg'},
    {name: 'Title', img: 'assets/img/icons/filters/ic-notes-dark-16.svg'},
    {name: 'Reminder', img: 'assets/img/icons/filters/ic-reminder-active-dark-16.svg'},
    {name: 'Color', img: 'assets/img/icons/filters/ic-note-color-light-16.svg', dropdown: 'colors'}
  ];

  constructor() { }

  ngOnInit() {}

  changeDropdown(dropdown) {
    this.onChangeDropDown.emit(dropdown);
  }

  changeSearchText(recent) {
    this.onChangeSearchText.emit(recent);
  }

  showMore() {
    this.filtersIndex += 8;
    if (this.filtersIndex >= this.filters.length) {
      this.filtersIndex = this.filters.length;
      this.showMoreBool = false;
    }
  }

  showLess() {
    this.filtersIndex = 3;
    this.showMoreBool = true;
  }
}

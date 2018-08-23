import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-folder',
  templateUrl: './dropdown-folder.component.html',
  styleUrls: ['./dropdown-folder.component.css']
})
export class DropdownFolderComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangeFolder = new EventEmitter<string>();

  folders = [
    { name: 'All my notes' },
    { name: 'My notes', childs: [
      {name: 'Floder 1'},
      {name: 'Floder 2'},
      {name: 'Floder 3'},
      {name: 'Floder 4'},
      {name: 'Floder 5'},
      {name: 'Floder 6'},
      {name: 'Floder 7'},
      {name: 'Floder 8'},
      {name: 'Floder 9'},
      {name: 'Floder 10'},
      {name: 'Floder 11'},
      {name: 'Floder 12'}
    ]}
  ];
  constructor() { }

  ngOnInit() {
  }

  changeFolder(folder) {
    this.onChangeFolder.emit(folder.name);
  }

}

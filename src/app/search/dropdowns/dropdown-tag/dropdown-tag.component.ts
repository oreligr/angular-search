import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-tag',
  templateUrl: './dropdown-tag.component.html',
  styleUrls: ['./dropdown-tag.component.css']
})
export class DropdownTagComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangeTag = new EventEmitter<string>();

  tags = [
    { name: 'design' },
    { name: 'uxarticles' },
    { name: 'photos' },
    { name: 'golden' },
    { name: 'design' },
    { name: 'songs' }
  ];
  constructor() { }

  ngOnInit() {
  }

  changeTag(tag) {
    this.onChangeTag.emit(tag.name);
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-color',
  templateUrl: './dropdown-color.component.html',
  styleUrls: ['./dropdown-color.component.css']
})
export class DropdownColorComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangeColor = new EventEmitter<string>();

  colors = [
    { name: 'color1', color: '#42a5f5'},
    { name: 'color2', color: '#fac92f'},
    { name: 'color3', color: '#fda639'},
    { name: 'color4', color: '#ed5454'},
    { name: 'color5', color: '#8bc34a'},
    { name: 'color6', color: '#b39ddb'},
    { name: 'color7', color: '#5573a7'}
  ];
  constructor() { }

  ngOnInit() {
  }

  changeColor(color) {
    this.onChangeColor.emit(color);
  }
}

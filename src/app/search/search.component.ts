import { Component, OnInit, ElementRef } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class SearchComponent implements OnInit {

  clearActive = false; // Переменная для активации кнопки Очистки поиска

  searchText: string; // Переменная значения поля Поиска

  dropdown = ''; // Переменная с названием открытого дропдауна

  changeClose = false; // Переменная чо бы отслеживать возможноть закрыть дропдаун

  paddingLeft = 16; // Переменная отступа для текста в строке поиска

  selectedDrops = []; // Список выбранных значений в дропдаунах

  recentSearchArr: Array<String> = []; // Массив элементов "Последние поиски"

  constructor(private _eref: ElementRef) { }

  ngOnInit() {}
  // Клик вне элемента поиска
  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.clearActive = false;
      this.searchText = '';

      if (this.changeClose === false) {
        this.deleteEmptyDrops();
        this.dropdown = '';
      }
      this.changeClose = false;
    }
   }

  // Нажатие  на строку поиска
   onSearchClick() {

    this.deleteEmptyDrops();

    this.dropdown = 'filters';

   }

  // Удаление пустых плашек, для которых не было выбрано значение из строки поиска
   deleteEmptyDrops() {
    this.selectedDrops.forEach((element, index) => {
      if (element.dropdown === this.dropdown) {
        if (!element.value) {
          this.removeDrop(index);
        }
      }
    });
   }

  // Удаление плашки из строки поиска
   deleteDrop(drop) {
    this.selectedDrops.forEach((element, index) => {
      if (element.dropdown === drop.dropdown) {
        this.removeDrop(index);
      }
    });
   }

  // При вводе символов в строку поиска сделать доступным очистку инпута
   onInputChange() {
    if (this.searchText.length > 0) {
      this.clearActive = true;
    }
   }

  // Очитска строки поиска
   onInputClear() {
    this.searchText = '';
    this.clearActive = false;
    this.selectedDrops = [];
    this.dropdown = '';
    this.calculatePadding();
   }

  // Включение нужного дропдауна после выбора Фильтрах
   onChangeDropDown(filter) {
     this.changeClose = true;
     this.dropdown = filter.dropdown;
     let unique = true;
     this.selectedDrops.forEach(element => {
       if (element.name === filter.name) {
        unique = false;
       }
     });
     if (unique === true) {
      this.selectedDrops.push(filter);
     }
    this.changeClose = false;
    this.calculatePadding();
   }

  // Выбор значения в дропдауне
   onSelectItem(value, dropdown) {
    this.selectedDrops.forEach((element, index) => {
      if ( element.dropdown === dropdown) {
        // Создает/перезаписывает значение value в нужном дропдауне
        this.selectedDrops[index].value = value;
      }
    });
    // Закрывает все дропдауны
    this.dropdown = '';

    this.calculatePadding();
   }
  // Считает нужный отступ справа в строке поиска
   calculatePadding() {
    setTimeout(() => {
     let elWidth = this._eref.nativeElement.children[0].children[1].offsetWidth;
     this.paddingLeft = elWidth + 16;
    }, 10);
   }

  // Открывает дропдаун соответствующий нажатой плашке
   openDrop(drop) {
    this.dropdown = drop.dropdown;
   }

  // Удаляет плашку из строки поиска
   removeDrop(index) {
    this.selectedDrops.splice(index, 1);
    this.calculatePadding();
   }
  // Нажатие на Enter
  // Если в строке поиска не пусто, добавляет значение в массив Последних поисков
   enterDown(event) {
    if (event.keyCode === 13) {
        if (this.recentSearchArr.length === 10) {
          this.recentSearchArr.splice(-1, 1);
        }
        this.recentSearchArr.unshift(this.searchText);
        this.searchText = '';

    }
   }

   onChangeSearchText(text) {
    this.searchText = text;
   }

}

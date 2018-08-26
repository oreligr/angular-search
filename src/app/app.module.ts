import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DropdownFolderComponent } from './search/dropdowns/dropdown-folder/dropdown-folder.component';
import { DropdownTagComponent } from './search/dropdowns/dropdown-tag/dropdown-tag.component';
import { DropdownColorComponent } from './search/dropdowns/dropdown-color/dropdown-color.component';
import { DropdownFiltersComponent } from './search/dropdowns/dropdown-filters/dropdown-filters.component';
import { FormsModule } from '@angular/forms';
import { DropdownCreatedComponent } from './search/dropdowns/dropdown-created/dropdown-created.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DropdownFolderComponent,
    DropdownTagComponent,
    DropdownColorComponent,
    DropdownFiltersComponent,
    DropdownCreatedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

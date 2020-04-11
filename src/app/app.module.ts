import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ItemComponent } from '../itemgrid/item.component';
import { AppService } from './app.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent,FooterComponent,ItemComponent],
  bootstrap:    [ AppComponent ],
  providers:[AppService]
})
export class AppModule { }

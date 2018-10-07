import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {UserService} from './service/user.service';
import {ProductService} from './service/product.service';
import {HttpClientModule} from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { CategoryComponent } from './category/category.component';
import {CategoryService} from './service/category.service';
import {ItemService} from './service/item.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ItemComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    ProductService,
    ItemService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

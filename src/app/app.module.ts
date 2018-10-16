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
import {NgxPaginationModule} from "ngx-pagination";
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ItemComponent,
    CategoryComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
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

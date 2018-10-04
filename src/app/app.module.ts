import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import { NewCompComponent } from './new-comp/new-comp.component';
import { UserComponent } from './user/user.component';
import {UserService} from "./service/user.service";
import {ProductService} from "./service/product.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewCompComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent, NewCompComponent]
})
export class AppModule { }

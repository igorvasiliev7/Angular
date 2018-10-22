import {RouterModule, Routes} from "@angular/router";
import {OrdersComponent} from "./orders/orders.component";
import {UserComponent} from "./user/user.component";
import {ItemComponent} from "./item/item.component";
import {CategoryComponent} from "./category/category.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: OrdersComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'items',
    component: ItemComponent
  },
  {
    path: 'categories',
    component: CategoryComponent
  },
  {
    path: '**',
    component: OrdersComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoitingModule{}

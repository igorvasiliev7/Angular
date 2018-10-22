import { Component, OnInit } from '@angular/core';
import {OrderService} from "../service/order.service";
import {Order} from "../model/order";
import {ResponseOrderDTO} from "../dto/response.order.dto";

const startPage: number = 0;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  totalCount: number;
  currentPage: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.findAll(startPage);
  }

  changePage(page:number) {
    this.currentPage = page;
    this.findAll((page - 1));
  }

  private findAll(page: number) {
    this.orderService.findAll(page).subscribe((s: ResponseOrderDTO) => {
      this.orders = s.orders;
      this.totalCount = s.count;
    });
  }
}

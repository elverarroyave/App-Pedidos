import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {

  listOrders: Array<Order> = new Array<Order>();
  constructor(public orderService: OrdersService) { }

  ngOnInit(): void {
    this.listOrders = this.orderService.listOrders;
  }


  deleteOrder(i: number){
    this.orderService.deleteOrder(i);
    this.listOrders = this.orderService.listOrders;
  }

}

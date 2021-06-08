import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/Order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  order: Order;
  constructor(public orderService: OrdersService, public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.orderService.listOrders.forEach(order =>{
      if(order.orderId == this.rutaActiva.snapshot.params.id){
        this.order = order;
      }
    })
  }
}

import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { OrderDetails } from '../models/OrderDetails';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  order: Order = new Order();

  constructor() {
    this.order = this.lastOrderToLocalStorage
  }

  saveInLocalStorage(){
    localStorage.setItem('lastOrder', JSON.stringify(this.order))
  }

  get lastOrderToLocalStorage():Order
  {
    let lastOrderToLocalStorage: Order = new Order(JSON.parse(localStorage.getItem('lastOrder')));
    if(lastOrderToLocalStorage ==  null){
      return new Order;
    }
    return  lastOrderToLocalStorage
  }


  saveOrder(){
    let listOrders: Order[] = this.listOrders
    this.order.date = new Date()

    console.log(this.order)
    
    listOrders.push(this.order);
    localStorage.setItem("orders", JSON.stringify(listOrders))
    localStorage.removeItem('lastOrder');
    this.order = new Order(null);
  }

  deleteOrder(id){
    let listOrders: Order[] = this.listOrders
    listOrders = listOrders.filter(order => 
      order.orderId != id
    )
    localStorage.setItem("orders", JSON.stringify(listOrders))
  }

  get listOrders(): Array<Order>{
    let orders: Order[] = JSON.parse(localStorage.getItem('orders'))
    if(orders == null){
      return new Array<Order>();
    }
    return orders.sort((a,b)=> b.orderId - a.orderId);
  }
}

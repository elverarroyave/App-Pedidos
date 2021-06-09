import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { OrderDetails } from '../models/OrderDetails';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public orderService: OrdersService) { }

  ngOnInit(): void {
  }

  calcularTotal(i: number){
    this.orderService.order.actualizarCantidaddes(i);
    this.orderService.saveInLocalStorage();
  }

  saveShoping(){
    this.orderService.saveOrder();
    Swal.fire(
      'Pedido Realizado!',
      'Ahora lo puedes ver en tu lista de pedidos.',
      'success'
    )
  }

  delete(i: number){
    this.orderService.order.orderDetail.splice(i,1);
    this.orderService.saveInLocalStorage();
    this.orderService.order.updateTotal();
  }
}

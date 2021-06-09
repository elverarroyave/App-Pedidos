import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Order } from '../models/Order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {

  listOrders: Array<Order> = new Array<Order>();
  constructor(public orderService: OrdersService, private ruta: Router) { }

  ngOnInit(): void {
    this.listOrders = this.orderService.listOrders;
  }


  deleteOrder(order: Order){
    Swal.fire({
      title: `¿Eliminar el pedido de: ${order.clientName}?`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#dc3545',
      icon: 'warning'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', '', 'success')
        
        this.orderService.deleteOrder(order.orderId);
        this.listOrders = this.orderService.listOrders;

      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }

  veiwDetail(orderId: number){
    this.ruta.navigateByUrl('/order-client/' + orderId);
  }

}

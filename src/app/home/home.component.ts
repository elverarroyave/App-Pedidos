import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Client } from '../models/Client';
import { ClientsService } from '../services/clients.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clients :Array<Client> = new Array<Client>();
  constructor(
    public clientsService: ClientsService, 
    public orderService: OrdersService,
    public route: Router
    ) { }

  ngOnInit(): void {
    this.clients = this.clientsService.clientsLocalStorage;
  }

  searhClient(event){
    this.clients = this.clientsService.clientsLocalStorage.filter(client =>{
      return client.name.toLowerCase().includes(event.target.value.toLowerCase()) || client.lastName.toLowerCase().includes(event.target.value.toLowerCase())
    })
  }

  deleteClient(clientToDelete:Client ){
    Swal.fire({
      title: `¿Eliminar a ${clientToDelete.name}?`,
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
        this.clients = this.clientsService.deleteInLocalStorage(clientToDelete.clientId);
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }

  goToProduct(client: Client){
    this.orderService.order.clientId = client.clientId;
    this.orderService.order.clientName = `${client.name} ${client.lastName}`;
    this.orderService.saveInLocalStorage();
    this.route.navigateByUrl("/products")
    Swal.fire({
      position: 'top',
      icon: 'info',
      title: `Selecciona los productos`,
      text: `Selecciona los productos que comprará ${client.name}. Y luego presiona en el botón "Detalles de compra" para ajustar los ultimos detalles.`,
      showConfirmButton: true
    })
  }

}

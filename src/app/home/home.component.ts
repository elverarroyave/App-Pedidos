import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  deleteClient(id:number){
    this.clients = this.clientsService.deleteInLocalStorage(id);
    console.log('Eliminando Clientes')
  }

  goToProduct(client: Client){
    this.orderService.order.clientId = client.clientId;
    this.orderService.order.clientName = `${client.name} ${client.lastName}`;
    this.orderService.saveInLocalStorage();
    this.route.navigateByUrl("/products")
  }

}

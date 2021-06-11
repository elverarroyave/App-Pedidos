import { Component, OnInit } from '@angular/core';
import { Client } from '../models/Client';
import { Product } from '../models/Product';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveClient(){
    let clientsToSave:  Array<Client> = new Array<Client>();
    localStorage.setItem("clients", JSON.stringify(clientsToSave));
  }

  saveProducts(){
    let productsToSave: Array<Product> = new Array<Product>();
    localStorage.setItem("products", JSON.stringify(productsToSave));
  }

  deleteClients(){
    localStorage.removeItem('clients')
  }

  deleteProducts(){
    localStorage.removeItem('products')
  }

  deleteAll(){
    localStorage.clear();
  }

  get localClients(): Array<Client>{
    let clientsLocalStorage: Client[] = JSON.parse(localStorage.getItem('clients'))
    if(clientsLocalStorage == null){
      return new Array<Client>();
    }
    return clientsLocalStorage;
  }

  get localProducts(): Array<Product>{
    let productsLocalStorage: Product[] = JSON.parse(localStorage.getItem('products'))
    if(productsLocalStorage == null){
      return new Array<Product>();
    }
    return productsLocalStorage;
  }

}

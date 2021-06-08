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
    // this.clients.push(new Client('Maria','Eugenia',48))
    // this.clients.push(new Client('Elver','Arroyave',24))

    // this.products.push(new Product('Jabon', 1500))
    // this.products.push(new Product('Detergente 1k', 6000))
  }

  saveClient(){
    let clientsToSave:  Array<Client> = new Array<Client>();
    // clientsToSave.push(new Client('Maria','Eugenia',48))
    // clientsToSave.push(new Client('Elver','Arroyave',24))
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

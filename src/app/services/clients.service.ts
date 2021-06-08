import { Injectable } from '@angular/core';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  addLocalStorage(client: Client){
    //debugger
    let clientInLocalStorage: Client[] = this.clientsLocalStorage;
    client.clientId = this.addIdClient();   
    clientInLocalStorage.push(client)
    localStorage.setItem('clients', JSON.stringify(clientInLocalStorage))
  }

  deleteInLocalStorage(id:number): Array<Client>{
    let clientInLocalStorage: Client[] = this.clientsLocalStorage;
    //debugger
    clientInLocalStorage = clientInLocalStorage.filter(clientSaved =>
      clientSaved.clientId != id
    )
    localStorage.setItem('clients', JSON.stringify(clientInLocalStorage))
    return clientInLocalStorage;
  }

  addIdClient(): number{
    let idsInLocalStorage: Array<number> = this.idLocalStorage(); 

    let id = (idsInLocalStorage.length == 0)
    ? 1
    : idsInLocalStorage[idsInLocalStorage.length-1] + 1;

    idsInLocalStorage.push(id)
    localStorage.setItem('ids', JSON.stringify(idsInLocalStorage));
    return id;
  }

  get clientsLocalStorage(): Array<Client>{
    let clientInLocalStorage: Client[] = JSON.parse(localStorage.getItem('clients'))
    if(clientInLocalStorage == null){
      return new Array<Client>();
    }
    return clientInLocalStorage;
  }

  idLocalStorage(): Array<number>{
    let idLocalStorage: number[] = JSON.parse(localStorage.getItem('ids'));
    if(idLocalStorage == null){
      return new Array<number>();
    } 
    return idLocalStorage
  }
}

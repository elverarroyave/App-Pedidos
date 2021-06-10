import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../models/Client';
import { ClientsService } from '../services/clients.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {

  private focus = true;
  formGroup: FormGroup;

  client: Client = new Client();

  constructor(
    private fb: FormBuilder, 
    public clientService: ClientsService, 
    private ruta: Router) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  addClient(){
    this.client=this.formGroup.value as Client;
    this.clientService.addLocalStorage(this.client);
    this.formGroup.reset();
    Swal.fire(
      {
        title:'¡Agregado!',
        text: `${this.client.name} ahora es tu cliente.`,
        icon: 'success',
        showConfirmButton: true,
      }
    )
    this.ruta.navigateByUrl('/');
  }

}

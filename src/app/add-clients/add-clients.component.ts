import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../models/Client';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {

  formGroup: FormGroup;

  client: Client = new Client();

  constructor(private fb: FormBuilder, public clientService: ClientsService, private ruta: Router) { }

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
    this.ruta.navigateByUrl('/');
  }

}

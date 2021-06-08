import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { AddClientsComponent } from './add-clients/add-clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsService } from './services/clients.service';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductsService } from './services/products.service';
import { OrdersService } from './services/orders.service';
import { ListOrdersComponent } from './list-orders/list-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ClientsComponent,
    ProductsComponent,
    OrdersComponent,
    HomeComponent,
    AddClientsComponent,
    AddProductsComponent,
    ListOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ClientsService,
    ProductsService,
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientsComponent } from './add-clients/add-clients.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrdersComponent } from './orders/orders.component';

import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'orders', component: OrdersComponent
  },
  {
    path: 'add-clients', component: AddClientsComponent
  },
  {
    path: 'add-products',  component: AddProductsComponent
  },
  {
    path: 'list-orders', component: ListOrdersComponent
  },
  {
    path: 'order-client/:id', component: OrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

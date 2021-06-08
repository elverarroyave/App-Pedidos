import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { OrdersService } from '../services/orders.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = new Array();

  constructor(
    public productService: ProductsService,
    public orderService: OrdersService
    ) { }

  ngOnInit(): void {
    this.products = this.productService.productsLocalStorage
  }

  deleteProduct(id){
    this.products = this.productService.deleteInLocalStorage(id);
  }

  searchProduct(event){
    this.products = this.productService.productsLocalStorage.filter(product =>{
      return product.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
  }

  addToCart(product:Product){
    this.orderService.order.addProduct(product);
    console.log(this.orderService.order)
    this.orderService.saveInLocalStorage();
  }

}

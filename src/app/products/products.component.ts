import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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

  deleteProduct(product: Product){
    Swal.fire({
      title: `¿Eliminar ${product.name}?`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#dc3545'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', '', 'success')
        this.products = this.productService.deleteInLocalStorage(product.idProduct);
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }

  searchProduct(event){
    this.products = this.productService.productsLocalStorage.filter(product =>{
      return product.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
  }

  addToCart(product:Product){
    this.orderService.order.addProduct(product);
    //console.log(this.orderService.order)
    this.orderService.saveInLocalStorage();
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Agregado al carrito',
      showConfirmButton: false,
      timer: 1000
    })
  }

}

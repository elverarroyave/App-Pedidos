import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Product } from '../models/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private fb:FormBuilder, private productService: ProductsService) { }

  ngOnInit(): void {
    this.formGroup=this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    })
  }


  addProduct(){
    Swal.fire(
      {
        title:'¡Agregado!',
        icon: 'success',
        showConfirmButton: true,
      }
    )
    this.productService.addLocalStorage(this.formGroup.value);
    this.formGroup.reset();
  }
}

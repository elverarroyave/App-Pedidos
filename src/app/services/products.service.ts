import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  addLocalStorage(product: Product){
    //debugger
    let productsInLocalStorage: Product[] = this.productsLocalStorage;
    product.idProduct = this.addIdToProduct();   
    productsInLocalStorage.push(product)
    localStorage.setItem('products', JSON.stringify(productsInLocalStorage))
  }

  deleteInLocalStorage(id:number): Array<Product>{
    let productsInLocalStorage: Product[] = this.productsLocalStorage;
    productsInLocalStorage = productsInLocalStorage.filter(productSave =>
      productSave.idProduct != id
    )
    localStorage.setItem('products', JSON.stringify(productsInLocalStorage))
    return productsInLocalStorage;
  }

  addIdToProduct(): number{
    let idsInLocalStorage: Array<number> = this.idLocalStorage(); 

    let id = (idsInLocalStorage.length == 0)
    ? 1
    : idsInLocalStorage[idsInLocalStorage.length-1] + 1;

    idsInLocalStorage.push(id)
    localStorage.setItem('idsProducts', JSON.stringify(idsInLocalStorage));
    return id;
  }

  get productsLocalStorage(): Array<Product>{
    let productInLocalStorage: Product[] = JSON.parse(localStorage.getItem('products'))
    if(productInLocalStorage == null){
      return new Array<Product>();
    }
    return productInLocalStorage;
  }

  idLocalStorage(): Array<number>{
    let idLocalStorage: number[] = JSON.parse(localStorage.getItem('idsProducts'));
    if(idLocalStorage == null){
      return new Array<number>();
    } 
    return idLocalStorage
  }

}

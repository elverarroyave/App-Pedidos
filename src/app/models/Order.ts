import { OrderDetails } from "./OrderDetails"
import { Product } from "./Product"

export class Order{
  orderId:number
  clientId: number
  clientName: string
  total: number 
  orderDetail: Array<OrderDetails>

  constructor(dates?: Order)
  {

    if(dates != null){
      this.orderId = dates.orderId
      this.clientId = dates.clientId
      this.clientName = dates.clientName
      this.total = dates.total
      this.orderDetail = dates.orderDetail
      return;
    }

    this.orderId=this.orderId
    this.clientId = this.clientId
    this.clientName = this.clientName
    this.total = this.total
    this.orderDetail = new Array<OrderDetails>();
  }

  addProduct(product: Product){
    let orderDetail: OrderDetails = new OrderDetails();
    orderDetail.amount = 1
    orderDetail.productName = product.name
    orderDetail.price = product.price
    orderDetail.productId = product.idProduct
    orderDetail.total = orderDetail.amount * product.price

    let exist :boolean 
    let position: number
    this.orderDetail.forEach((order, index) => {
      //debugger
      if(order.productId == product.idProduct){
        exist = true 
        position = index
      }else{
        exist = false   
      }
    })
    if(exist){
      this.orderDetail[position].amount++
      this.orderDetail[position].total = this.orderDetail[position].amount * this.orderDetail[position].price
    }else{
      this.orderDetail.push(orderDetail);
    }
    //debugger
    this.updateTotal();
    this.orderId = this.addIdToOrder();
  }

  private addIdToOrder(): number{
    let idsInLocalStorage: Array<number> = this.idLocalStorage(); 

    let id = (idsInLocalStorage.length == 0)
    ? 1
    : idsInLocalStorage[idsInLocalStorage.length-1] + 1;

    idsInLocalStorage.push(id)
    localStorage.setItem('idsOrders', JSON.stringify(idsInLocalStorage));
    return id;
  }

  private idLocalStorage(): Array<number>{
    let idLocalStorage: number[] = JSON.parse(localStorage.getItem('idsOrders'));
    if(idLocalStorage == null){
      return new Array<number>();
    } 
    return idLocalStorage
  }

  updateTotal(){
    this.total = 0
    this.orderDetail.forEach(order => this.total += order.total);
  }

  public actualizarCantidaddes(i:number){
    this.orderDetail[i].total = this.orderDetail[i].amount * this.orderDetail[i].price;
    this.updateTotal();
  }

}

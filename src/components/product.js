import {bindable} from 'aurelia-framework';

export class Product{
  @bindable product = null;
  products = null;

  constructor(router)
  {
  }

  addProduct(product)
  {
    var pIndex = this.order.products.indexOf(product);
    pIndex > -1 ? this.order.products[pIndex].amount++ : product.amount = 1 && this.order.products.push(product);
  }
}

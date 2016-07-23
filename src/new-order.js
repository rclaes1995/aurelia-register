import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class NewOrder {
  tableId = null;
  products = null;
  router = null;
  order = {};

  constructor(router)
  {
    this.router = router;
    this.order.products = [];
  }

  activate(params){
    params.id ? this.tableId = params.id : this.router.navigateToRoute("table-overview");
    var productsRef = firebase.database().ref('products');
    productsRef.on('value', snapshot => {
      this.products = snapshot.val();
    });

  }

  back()
  {
    this.router.navigateToRoute("table-details", {id:this.tableId});
  }

  addProduct(product)
  {
    this.order.products.push(product);
  }
}

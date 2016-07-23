import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class TableDetails {
  heading = 'Order';
  bill = null;
  orders = null;
  router = null;
  tableId = null;

  constructor(router)
  {
    this.router = router;
  }

  activate(params){
    var billRef = firebase.database().ref('bills/'+params.id);
    billRef.on('value', snapshot => {
      if(snapshot.exists()){
        this.tableId = snapshot.key;
        this.bill = snapshot.val();
        console.table(this.bill.orders);
        this.bill.totalAmount = 0;
        // for(var order of this.bill.orders)
        // {
        //   for(var product of order.products)
        //   {
        //     this.bill.totalAmount += product.price * product.amount;
        //   }
        // }
      }
    });
  }

  back()
  {
    this.router.navigateToRoute("table-overview");
  }

  newOrder()
  {
    this.router.navigateToRoute("new-order", {id:this.tableId});
  }
}

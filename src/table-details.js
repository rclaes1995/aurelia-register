import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class TableDetails {
  heading = 'Order';
  bill = null;
  orders = null;
  router = null;

  constructor(router)
  {
    this.router = router;
  }

  activate(params){
    var billRef = firebase.database().ref('bills/'+params.id);
    billRef.on('value', snapshot => {
      if(snapshot.exists()){
        this.bill = snapshot.val();
        this.bill.totalAmount = 0;
        for(var order of this.bill.orders)
        {
          for(var product of order.products)
          {
            this.bill.totalAmount += product.price * product.amount;
          }
        }
      }
      else {
      }
    });
  }

  back()
  {
      this.router.navigateToRoute("table-overview");
  }
}

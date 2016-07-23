import {bindable} from 'aurelia-framework';

export class Order{
  @bindable order = null;
  @bindable id = null;

  placeOrder(){
    if(this.id)
    {
      this.order.time = new Date().toTimeString().split(' ')[0];
      var ordersRef = firebase.database().ref('bills/' + this.id + '/orders');
      ordersRef.push(JSON.parse(JSON.stringify(this.order)));
    }
  }
}

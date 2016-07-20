export class TableDetails {
  heading = 'Order';
  bill = null;

  constructor()
  {
  }

  activate(params){
    var billRef = firebase.database().ref('bills/'+params.id);
    billRef.on('value', snapshot => {
      if(snapshot.exists()){
        this.bill = snapshot.val();
      }
      else {
        this.bill = {totalAmount:0}
      }
    });
  }

  removeBill()
  {
    alert('Removing...');
    this.billRef.remove();
  }
}

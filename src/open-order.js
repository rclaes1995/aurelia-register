export class OpenOrder {
  heading = 'Order';
  bill = null;
  billRef = null;

  constructor()
  {

  }

  activate(params){
      this.billRef = firebase.database().ref('bills/'+params.id);
      this.billRef.on('value', snapshot => {
        this.bill = snapshot.val();
      });
  }

  removeBill()
  {
    alert('Removing...');
    this.billRef.remove();
  }
}

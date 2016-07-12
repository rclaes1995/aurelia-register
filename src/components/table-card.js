import {bindable} from 'aurelia-framework';

export class TableCard{
  @bindable table = null;
  isFree = false;

  constructor()
  {
  }

  newOrder()
  {
    alert('New order');
  }

  openOrder()
  {
    alert('Open order');
  }

  set IsFree(value){
    this.isFree = value;
  }
}

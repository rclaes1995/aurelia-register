import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class TableCard{
  @bindable table = null;
  isFree = true;

  constructor(router)
  {
    this.router = router;
  }

  newOrder(table)
  {
    this.router.navigateToRoute("open-order", {id:this.table.name});
  }

  set IsFree(value){
    this.isFree = value;
  }
}

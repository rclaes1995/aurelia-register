import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class Product{
  @bindable product = null;
  products = null;

  constructor(router)
  {
  }
}

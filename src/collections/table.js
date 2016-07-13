import {inject} from 'aurelia-framework';
import {ReactiveCollection} from 'aurelia-firebase';

export class TableCollection extends ReactiveCollection {

  constructor(){
    super('tables');
  }
}

import {inject} from 'aurelia-framework';
import {TableCollection} from './collections/table';

@inject(TableCollection)
export class TableOverview {

  constructor(collection:TableCollection){
    this.collection = collection;
    console.log(this.collection);
  }

}


  /*tables = [
    {isVisible:true, name:'B1'},
    {isVisible:true, name:'B2'},
    {isVisible:true, name:'B3'},

    {isVisible:true, name:'4'},
    {isVisible:false},
    {isVisible:true, name:'9'},

    {isVisible:true, name:'3'},
    {isVisible:true, name:'7'},
    {isVisible:true, name:'8b'},

    {isVisible:true, name:'2'},
    {isVisible:true, name:'6'},
    {isVisible:true, name:'8a'},

    {isVisible:true, name:'1'},
    {isVisible:true, name:'5'},
    {isVisible:true, name:'TOOG'}
  ];*/

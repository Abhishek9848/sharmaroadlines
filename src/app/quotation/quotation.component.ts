import { Component, OnInit } from '@angular/core';
interface destinationType{
  name:string;
}
@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {
  constructor() { }
  destinationName:destinationType[]= [
    {name:'Sahibabad'},{name:"Ghaziabad"},{name:'Bhiwadi'},{name:'Dwarka'},{name:'Meerut'},
    {name:'Ludhiyana'},{name:'Haridwar'},{name:'Aligarh'},{name:'Bhiwadi'},
  ]
  originInputclicked=false;
  destinationInputClicked=false;
  origin="";
  destination="";
  offloading="";
  weight="Kgs"
  Valid=false;

  onclicked(){
    this.originInputclicked=true;
  }
  onDestinationInputClick(){
    this.destinationInputClicked=true
  }
  getValue(value:any){
    console.log(value)
    this.origin=value.Origin;
    this.destination=value.Destination;
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  

  constructor() {
  
   }
 

   Countries: Array<any>= [
    { name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
    { name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
    { name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
    { name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
    { name: 'India', states: [ {name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
  ];

  players = [
    "Sachin Tendulkar",
    "Ricky Ponting",
    "Virat Kohli",
    "Kumar Sangakkara",
    "Jacques Kallis",
    "Hashim Amla    ",
    "Mahela Jayawardene    ",
    "Brian Lara",
    "Rahul Dravid",
    "AB de Villiers"
  ]
  selected = "----"
  
  update(e:any){
    this.selected = e.target.value
  }

  peepsSelect:any
  data = [
    {
      name: "Bob",
      age: "27",
      occupation: "Painter"
    },
    {
      name: "Barry",
      age: "35",
      occupation: "Shop Assistant"
    },
    {
      name: "Marvin",
      age: "42",
      occupation: "Mechanic"
    },
    {
      name: "Arthur dent",
      age: "27",
      occupation: "Human"
    }
  ];

  selectedd: any;
  people =[
    {
      name: "Bob",
      age: "27",
      occupation: "Painter"
    },
    {
      name: "Barry",
      age: "35",
      occupation: "Shop Assistant"
    },
    {
      name: "Marvin",
      age: "42",
      occupation: "Mechanic"
    },
    {
      name: "Arthur dent",
      age: "27",
      occupation: "Human"
    }
  ]

  ngOnInit(): void{
    
  }
 
}

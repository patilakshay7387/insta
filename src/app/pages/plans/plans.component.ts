import { Component } from '@angular/core';
import { PLANSMOCK } from './plans.mock';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {

  players = PLANSMOCK.PLAYERS;
  Countries = PLANSMOCK.COUNTRIES

  selected = "----";
  plansForCity: any = {};
  constructor() { }
  update(e:any){
    this.selected = e;
    console.log(this.selected, e);
    this.filterPlans(e)
  }

  filterPlans(planId: string) {
    this.plansForCity = PLANSMOCK.PLANS.filter((plan) => plan.city == planId);
    console.log(this.plansForCity)
  }
}

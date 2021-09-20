import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-cards',
  templateUrl: './meal-cards.component.html',
  styleUrls: ['./meal-cards.component.scss']
})
export class MealCardsComponent {

  page: number = 1;

  @Input() meals: any[] = [];
  meal: any;

  constructor() { }

  setMeal(meal: any) {
    this.meal = meal;
  }

}

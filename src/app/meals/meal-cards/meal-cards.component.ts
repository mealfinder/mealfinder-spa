import { Component, Input } from '@angular/core';
import { Meal } from '../shared/meal.model';

@Component({
  selector: 'app-meal-cards',
  templateUrl: './meal-cards.component.html',
  styleUrls: ['./meal-cards.component.scss']
})
export class MealCardsComponent {

  page: number = 1;

  @Input() meals: Meal[] = [];

  meal?: Meal;

  constructor() { }

  setMeal(meal: Meal): void {
    this.meal = meal;
  }

}

import { Component, Input, OnChanges } from '@angular/core';
import { Meal } from '../shared/meal.model';

@Component({
  selector: 'app-meal-cards',
  templateUrl: './meal-cards.component.html',
  styleUrls: ['./meal-cards.component.scss']
})
export class MealCardsComponent implements OnChanges {

  page: number = 1;

  @Input() meals: Meal[] = [];

  @Input() loading = {
    loaded: false,
    isEmpty: false
  };

  skeletons: any[] = Array(8);

  meal?: Meal;

  constructor() { }

  ngOnChanges(): void {
    this.resetPage();
  }

  setMeal(meal: Meal): void {
    this.meal = meal;
  }

  resetPage(): void {
    this.page = 1;
  }

}

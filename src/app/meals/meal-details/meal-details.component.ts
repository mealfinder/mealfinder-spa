import { Component, Input } from '@angular/core';
import { Meal } from '../shared/meal.model';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss']
})
export class MealDetailsComponent {

  @Input() meal: Meal | undefined = {};

  constructor() { }

}

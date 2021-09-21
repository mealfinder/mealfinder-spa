import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss']
})
export class MealDetailsComponent {

  @Input() meal: any = {};

  constructor() { }

}

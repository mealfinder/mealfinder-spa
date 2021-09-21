import { Component, OnInit } from '@angular/core';
import { MealService } from './shared/meal.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {

  inputValueSaved: string = '';

  meals: any[] = [];

  constructor(private mealService: MealService) { }

  saveValue(value: string): void {
    if(value != this.inputValueSaved) {
      this.inputValueSaved = value;
      this.getAll(value);
    }
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(search: string = ''): any {
    this.mealService.getAll(search).subscribe(
      (resources: any[]) => {
        this.meals = resources;
      }
    );
  }

}

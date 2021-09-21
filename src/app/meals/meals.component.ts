import { Component, OnInit } from '@angular/core';
import { Meal } from './shared/meal.model';
import { MealService } from './shared/meal.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {

  inputValueSaved: string = '';

  loading = {
    loaded: false,
    isEmpty: false
  };

  meals: Meal[] = [];

  constructor(private mealService: MealService) { }

  saveValue(value: string): void {
    if(value != this.inputValueSaved) {
      this.inputValueSaved = value;
      this.loading.loaded = false;
      this.getAll(value);
    }
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(search: string = ''): any {
    this.mealService.getAll(search).subscribe(
      (resources: Meal[]) => {
        (resources.length > 0) ? this.loading.isEmpty = false : this.loading.isEmpty = true;
        this.meals = resources
        this.loading.loaded = true;        
      }
    );
  }

}

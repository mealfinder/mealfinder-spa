import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Meal } from './meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'applicaton/json', 'Access-Control-Allow-Origin' : '*' })
  }

  constructor(private http: HttpClient) { }

  getAll(search: string): Observable<any> {
    return this.http.get<any>(environment.apiPath + '/meals?s='+search).pipe(
      map((res: any) => this.jsonDataToMeals(res)),
      catchError(this.handleError)
    );
  }

  protected jsonDataToMeals(jsonData: any[]): Meal[] {
    console.log(jsonData);
    
    const meals: Meal[] = [];
    jsonData.forEach(
      element => meals.push(element)
    );
    return meals;
  }

  protected handleError(error: any): Observable<any> {
    console.log("Erro na requisição: => ", error);
    return throwError(error);
  }
}

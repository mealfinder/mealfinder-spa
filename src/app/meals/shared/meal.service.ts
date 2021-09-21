import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'applicaton/json' })
  }

  constructor(private http: HttpClient) { }

  getAll(search: string): Observable<any> {
    return this.http.get<any>(environment.apiPath + '/meals?s='+search).pipe(
      catchError(this.handleError),
      map((res: any) => res.meals)
    );
  }

  protected handleError(error: any): Observable<any> {
    console.log("Erro na requisição: => ", error);
    return throwError(error);
  }
}

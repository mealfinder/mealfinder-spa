import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiPath: string = 'https://www.themealdb.com'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'applicaton/json' })
  }

  constructor(private http: HttpClient) { }

  getAll(search: string): Observable<any> {
    return this.http.get<any>(this.apiPath + '/api/json/v1/1/search.php?s='+search).pipe(
      catchError(this.handleError),
      map((res: any) => res.meals)
    );
  }

  protected handleError(error: any): Observable<any> {
    console.log("Erro na requisição: => ", error);
    return throwError(error);
  }
}

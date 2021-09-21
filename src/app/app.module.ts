import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealsComponent } from './meals/meals.component';
import { MealCardsComponent } from './meals/meal-cards/meal-cards.component';
import { MealDetailsComponent } from './meals/meal-details/meal-details.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    MealCardsComponent,
    MealDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

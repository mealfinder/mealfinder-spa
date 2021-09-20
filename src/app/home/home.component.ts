import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputValueSaved: string = '';

  meals: any[] = [];

  constructor(private homeService: HomeService) { }

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
    this.homeService.getAll(search).subscribe(
      (resources: any[]) => {
        this.meals = resources;
      }
    );
  }

}

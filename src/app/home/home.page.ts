import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  planets: string[]= []; 

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.fetchPlanets();

  }

  fetchPlanets() {
    console.log("getting planets");
      this.httpClient.get('https://swapi.dev/api/planets/')
      .subscribe( (data: any) => {
        this.planets = data.results;
        console.log(this.planets);
      })
    }


}

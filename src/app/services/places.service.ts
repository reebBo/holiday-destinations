import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // cities = "https://countriesnow.space/api/v0.1/countries/population/cities"
  // pics = "https://api.teleport.org/api/cities/";

  constructor(private http: HttpClient) {
    // this. getCities();
  }
  // getCities() {
  //   return this.http.get(this.cities)
  // }
  // getPics() {
  //   return this.http.get(this.pics)  
  // }


  getResources() {
    return this.http.get('assets/destinations.json');
  }
}

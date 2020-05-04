import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

  getWeatherFromApi(city: string){
    return this.httpClient.get(`http://api.weatherstack.com/current?access_key=a1a05fe884e32833bf5abbecba57e051&query=${city}`);
  }
}
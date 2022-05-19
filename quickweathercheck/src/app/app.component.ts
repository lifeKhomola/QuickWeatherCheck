import { Component } from '@angular/core';
import { WeatherData } from './Models/weather.model'
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quickweathercheck';
  constructor(private weatherService: WeatherService) {

  }

  cityName: string = 'Wellington';
  Data?: WeatherData;
  weatherData:any;
 

  ngOnInit(): void {
  // this.getWeatherData(this.cityName);
  this.cityName = '';
  console.log("oky") 
 
 
  }

  onSubmit() {
  this.getWeatherData(this.cityName);
  this.cityName = '';
  }

  private getWeatherData(cityName: string) {
  this.weatherService.getWeatherData(cityName)
  .subscribe({
      next: (response:any) => {
      this.Data = response;
      console.log("res",this.Data = response);
      this.weatherData = this.Data;
      console.log("html", this.weatherData);
      }
  });
  }
}

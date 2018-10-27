import {Component, Input} from '@angular/core';
import {IWeather} from '../../Entity/WeatherInterface';

@Component({
  selector: 'app-temperatur',
  templateUrl: './temperatur.component.html',
  styleUrls: ['./temperatur.component.css']
})
export class TemperaturComponent {

  @Input()
  public weather!: IWeather;
}

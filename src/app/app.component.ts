import { Component } from '@angular/core';
import {IResort} from './Entity/ResortInterface';
import {resorts} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'weather-widget';

    public type = '';

    public resort: IResort = resorts[1];

    public changeType(value: string): void {
        console.log(value);
        this.type = value;
    }

    public selectResort(value: IResort): void {
        console.log(value);
        this.resort = value;
    }
}

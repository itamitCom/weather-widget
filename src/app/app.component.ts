import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'weather-widget';

    public type = '';

    public changeType(value: string): void {
        console.log(value);
        this.type = value;
    }
}

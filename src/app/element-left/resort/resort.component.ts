import {Component, Input} from '@angular/core';
import {IResort} from '../../Entity/ResortInterface';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.css']
})
export class ResortComponent {

    @Input()
    public resort!: IResort;
}

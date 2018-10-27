import {Component, Input} from '@angular/core';
import {ISocial} from '../../Entity/SocialInterface';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent {

  @Input()
  public socialInfo!: ISocial;
}

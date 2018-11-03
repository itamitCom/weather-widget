import {Component, OnInit} from '@angular/core';
import {IResort} from '../common/entity/ResortInterface';
import {ResortService} from '../common/services/resort.service';

@Component({
  selector: 'app-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent implements OnInit {

    public resorts!: IResort[];

    public type = '';

    constructor(
        private _resortService: ResortService
    ) {}

    ngOnInit() {
        this._resortService.resorts.subscribe((resorts: IResort[]) => {
            this.resorts = resorts;
            this.type = resorts[0].type;
        });
    }

    public selectResort(resort: IResort): void {
        console.log(resort);
        this._resortService.setResort = resort;
    }


    public filterResort(type: string): void {
        console.log(type);
        this.type = type;
    }
}

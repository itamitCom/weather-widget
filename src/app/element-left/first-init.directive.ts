import {Directive, Input, OnInit} from '@angular/core';
import {IResort} from '../common/entity/ResortInterface';
import {ResortService} from '../common/services/resort.service';

@Directive({
    selector: '[appFirstInit]'
})
export class FirstInitDirective implements OnInit {

    @Input()
    public resort!: IResort;

    @Input()
    public first!: boolean;

    public constructor(
        private _resortService: ResortService
    ) {}

    public ngOnInit(): void {

        if (!this.first) {
            return;
        }

        this._resortService.setResort = this.resort;
    }

}
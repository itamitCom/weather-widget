import {ChangeDetectorRef, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IResort} from '../../entity/ResortInterface';
import {ResortService} from '../../services/resort.service';

export class ResortSubscriberComponent implements OnInit, OnDestroy {

    public resort!: IResort;
    public resortSubscription!: Subscription;

    constructor(
        @Inject(ResortService) private _resortService: ResortService,
        @Inject(ChangeDetectorRef) private _cd: ChangeDetectorRef,
    ) {
    }

    public ngOnInit(): void {
        this.resortSubscription = this._resortService.getResort.subscribe((resort: IResort) => {
            this.resort = resort;
            this._cd.detectChanges();
        });
    }

    public ngOnDestroy(): void {
        this.resortSubscription.unsubscribe();
    }

}

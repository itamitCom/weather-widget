import { Injectable } from '@angular/core';
import {Observable, of, ReplaySubject} from 'rxjs';
import {IResort} from '../entity/ResortInterface';
import {resorts} from './data';

@Injectable()
export class ResortService {

    private _resort$$: ReplaySubject<IResort> = new ReplaySubject(1);

    public get resorts(): Observable<IResort[]> {
        return of(resorts);
    }

    public get getResort(): Observable<IResort> {
        return this._resort$$.asObservable();
    }

    public set setResort(resort: IResort) {
        this._resort$$.next(resort);
    }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {IResort} from '../Entity/ResortInterface';
import {resorts$} from '../data';

@Component({
  selector: 'app-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent implements OnInit {

    @Output()
    public changeByType: EventEmitter<string> = new EventEmitter();

    @Output()
    public selectByResort: EventEmitter<IResort> = new EventEmitter();

    public resorts$: Observable<IResort[]> = resorts$;

    public type = '';

    constructor() { }

    public change(event: Event) {
        const li: HTMLLIElement = event.target as HTMLLIElement;
        this.type = li.innerHTML;
        this.changeByType.emit(li.innerHTML);
    }

    public select(resort: IResort) {
        this.selectByResort.emit(resort);
    }

    ngOnInit() {
    }
}

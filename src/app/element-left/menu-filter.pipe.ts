import { Pipe, PipeTransform } from '@angular/core';
import {IResort} from '../common/entity/ResortInterface';

@Pipe({
  name: 'menuFilter'
})
export class MenuFilterPipe implements PipeTransform {

    transform(resorts: IResort[]): Set<string> {

        if (!Array.isArray(resorts)) {
            return new Set();
        }
        return new Set(resorts.map((resort: IResort) => resort.type));
    }

}


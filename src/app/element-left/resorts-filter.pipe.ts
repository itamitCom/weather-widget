import { Pipe, PipeTransform } from '@angular/core';
import {IResort} from '../common/entity/ResortInterface';

@Pipe({
  name: 'resortsFilter'
})
export class ResortsFilterPipe implements PipeTransform {

    transform(resorts: IResort[], type: string): IResort[] {
        if (!type || type === 'All') {
            return resorts;
        }

        return resorts.filter((resort: IResort) => {
            return resort.type
                .toLowerCase()
                .includes(type.toLowerCase());
        });
    }
}

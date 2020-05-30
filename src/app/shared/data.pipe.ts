import { Pipe, PipeTransform } from '@angular/core';
import { Data } from './data';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(data: Data[], searchTerm: string): Data[] {
    if (!data || !searchTerm) {
        return data;
    }

    return data.filter(employee =>
        employee.title .toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
}

}

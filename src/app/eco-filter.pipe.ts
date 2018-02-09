import { Pipe, PipeTransform } from '@angular/core';
import { Eco } from './eco';

@Pipe({
    name: 'filter'
})

export class EcoFilterPipe implements PipeTransform {
    transform(ecos: Eco[], searchText: string): Eco[] {
        if (!ecos) return [];
        if (!searchText) return ecos;

        let searchTextLC = searchText.toLowerCase();
        return ecos.filter(eco => {
            return eco.eco_number.toLowerCase().includes(searchTextLC);
        });
    }
}
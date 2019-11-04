import { PipeTransform, Pipe } from '@angular/core';
import { CarDetails } from './details.service';

@Pipe({
    name: 'SearchFilterPipe'
})

export class SearchFilterPipe implements PipeTransform{
    transform(CarDetails: CarDetails[], searchTerm: string): CarDetails[]{
        if(!CarDetails || !searchTerm){
            return CarDetails;
        }
        return  CarDetails.filter( CarDetails => CarDetails.brand.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);  
    };
}
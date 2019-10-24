import { Injectable } from '@angular/core';
import { CarDetails, DetailsService} from '../../app/inventory/details/details.service';

@Injectable()

export class ProductService {
    private carDetails: CarDetails[];

    constructor(private DetailsService: DetailsService){
        this.carDetails = this.DetailsService.getCarDetails();
    }

    findAll(): CarDetails[]{
        return this.carDetails;
    }

    find(id: number): CarDetails{
        return this.carDetails[this.getSelectedCarDetails(id)];
    }

    private getSelectedCarDetails(id: number){
        for (let i = 0; i < this.carDetails.length; i++) {
            if (this.carDetails[i].id == id) {
                return i;
            }
        }
    }
}

console.log("sxsxsx", localStorage.getItem('quantity'));

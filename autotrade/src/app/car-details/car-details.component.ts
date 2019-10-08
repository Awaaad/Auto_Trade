import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';
import { DetailsService, CarDetails } from '../inventory/details/details.service';

// import { Details} from '../inventory/details.model';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  // details: Details;
  carDetails: Array<CarDetails>;
  constructor(private route: ActivatedRoute, private _detailsService: DetailsService) {   }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.carDetails = this._detailsService.getCarDetails();

    this.carDetails = this.carDetails.filter(data => data.id === id);
    console.log(this.carDetails);
  }

}

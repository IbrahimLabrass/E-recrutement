import {Component, Input, OnInit} from "@angular/core";
import {JobOfferInterface} from "../../interfaces/jobOffer.interface";
import * as stream from "stream";


@Component({
  selector: 'app-job-offer-card',
  templateUrl: './job-offer-card.component.html',

})
export class JobOfferCardComponent implements OnInit{
  @Input() jobOffer!: JobOfferInterface;

  constructor() {}

    ngOnInit(): void {

    }

}

import { Component, OnInit } from "@angular/core";
import {JobOffersService} from "../../../services/jobOffers.service";
import {JobOfferInterface} from "../../../interfaces/jobOffer.interface";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class AdminDashboardComponent implements OnInit {
  jobOffers:JobOfferInterface[] = [];
  constructor(private jobOfferService: JobOffersService) {}

  ngOnInit() {
    this.jobOfferService.getJobOffers().subscribe(data =>
      // slice the array to get the last 5 elements
      this.jobOffers = data.content.slice(Math.max(data.content.length - 3, 0))
      );
  }
}

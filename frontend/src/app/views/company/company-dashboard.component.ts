import {Component, Input, OnInit} from '@angular/core';
import {JobOfferInterface} from "../../interfaces/jobOffer.interface";
import {JobOffersService} from "../../services/jobOffers.service";

@Component({
  selector: 'app-company',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {
  page = 0;
  currentPage!: number;
  numberOfPages: number[] = [];
  jobOffers: JobOfferInterface[] = [];

  constructor(private jobOfferService: JobOffersService) {
    this.jobOfferService.getJobOfferByCompany().subscribe((jobOffers) => {
      // limit the number of job offers to 10 for pagination
      this.jobOffers = jobOffers;
      this.numberOfPages = this.getPages();
    });
  }



  // get pages for pagination of job offers
  getPages(): number[] {
    return Array(Math.ceil(this.jobOffers.length / 10)).fill(0).map((x, i) => i);
  }
  // function that takes the page number and returns the job offers for that page

  getJobOffersForPage(page: number): JobOfferInterface[] {
    return this.jobOffers.slice(page * 10, (page + 1) * 10);
  }

  setPage(page: number): void {
    console.log(page);
    console.log(this.currentPage)
    // if already on the page, do nothing
    if (page === this.currentPage) {
      return;
    }
    // check if the page is valid
    if (page >= 0 || page <= this.numberOfPages.length) {
      this.page = page;
      this.currentPage = page;
      this.jobOffers = this.getJobOffersForPage(this.page);
    }else {
      alert('Page does not exist');
    }
  }

  ngOnInit(): void {
    // initialize the job offers for the first page
    this.jobOffers = this.getJobOffersForPage(this.page);
    this.currentPage = this.page;
  }


  nextPage() {
    this.setPage(this.currentPage + 1);
  }
  previousPage() {
    this.setPage(this.currentPage - 1);
  }
}

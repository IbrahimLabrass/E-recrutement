import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {JobOfferInterface} from "../interfaces/jobOffer.interface";
import {Observable} from "rxjs";


@Injectable(
  {
    providedIn: 'root'
  }
)
export class JobOffersService {
  private _apiURI: string = 'http://localhost:8081/api/job-offers';
  company = JSON.parse(localStorage.getItem("user") || "{}");
  private token = localStorage.getItem("token");
  private options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  private headers = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    }

  }

  constructor(private Http: HttpClient) {
  }

  getJobOffers(): Observable<JobOfferInterface[]> {

    return this.Http.get<JobOfferInterface[]>(this._apiURI, this.options);
  }

  addJobOffer(jobOffer: any): Observable<any> {
    let url = this._apiURI + "/add?companyName=" + this.company.name;
    console.log(this.company.name);
    //send post request to add a new job offer with adding the token in the header
    return this.Http.post('http://localhost:8081/api/job-offers/add?companyName=Demo', jobOffer, this.headers);
  }
}

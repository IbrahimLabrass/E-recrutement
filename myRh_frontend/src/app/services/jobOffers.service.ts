import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JobOfferInterface} from "../interfaces/jobOffer.interface";
import {Observable} from "rxjs";
import * as http from "http";


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

  constructor(private Http: HttpClient) {
  }

  getJobOffers(): Observable<JobOfferInterface[]> {
    return this.Http.get<JobOfferInterface[]>(this._apiURI, this.options);
  }

  addJobOffer(jobOffer: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    console.log(this.token);
    let url = "http://localhost:8081/api/job-offers/add";
    //send post request to add a new job offer with adding the token in the header
    return this.Http.post(url, jobOffer, {headers: headers});
  }
}

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
  private options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  constructor(private Http: HttpClient) {
  }

  getJobOffers(): Observable<JobOfferInterface[]> {

    return this.Http.get<JobOfferInterface[]>(this._apiURI, this.options);
  }
}

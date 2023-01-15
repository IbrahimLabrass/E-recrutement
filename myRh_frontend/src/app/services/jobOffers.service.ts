import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JobOfferInterface} from "../interfaces/jobOffer.interface";
import {Observable} from "rxjs";
import * as http from "http";
import {PaginationJobOfferInterface} from "../interfaces/paginationJobOffer.interface";


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

  getJobOfferByCompany(): Observable<JobOfferInterface[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    let url = "http://localhost:8081/api/job-offers/find/company";
    return this.Http.get<JobOfferInterface[]>(url, {headers: headers});
  }

  getPendingJobOffers(page: number): Observable<PaginationJobOfferInterface> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    let url = "http://localhost:8081/api/job-offers/find/pending";
      return this.Http.get<PaginationJobOfferInterface>(url+"?pageNo="+page, this.options);

  }


  addJobOffer(jobOffer: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    console.log(this.token);
    let url = "http://localhost:8081/api/job-offers/add";
    //send post request to add a new job offer with adding the token in the header
    return this.Http.post(url, jobOffer, {headers: headers});
  }

  updateJobOfferStatus(id: number, status: string): Observable<boolean> {
    let url = "http://localhost:8081/api/job-offers/update?id=" + id + "&status=" + status;
    return this.Http.get<boolean>(url, this.options);
  }
}

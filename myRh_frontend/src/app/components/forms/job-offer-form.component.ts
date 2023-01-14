import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JobOffersService} from "../../services/jobOffers.service";
import {CompanyInterface} from "../../interfaces/Company.interface";


@Component(
  {
    selector: "app-job-offer-form",
    templateUrl: "./job-offer-form.component.html",
  }
)
export class JobOfferFormComponent implements OnInit {
  user = JSON.parse(localStorage.getItem("user") || "{}");
  constructor(private formBuilder: FormBuilder,private _jobOfferService: JobOffersService ) {
  }

  jobOfferForm = this.formBuilder.group({
    title: [ "" ,Validators.required],
    description: [ "" ,Validators.required],
    salary: [ "" ,Validators.required],
    location: [ "" ,Validators.required],
    profile: [ "" ,Validators.required],
    educationLevel: [ "" ,Validators.required],
    experienceLevel: ["", Validators.required],
    contractType: ["", Validators.required],
  });


  ngOnInit(): void {


    // check if user is logged in
    if (localStorage.getItem("token") === null) {
      window.location.href = "/auth/login";
    }
    }



  addJobOffer() {
    this._jobOfferService.addJobOffer(this.jobOfferForm.value).subscribe(data => {

      // if success redirect to home page
      console.log(data);
    });

  }
}

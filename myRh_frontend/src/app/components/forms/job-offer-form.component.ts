import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component(
  {
    selector: "app-job-offer-form",
    templateUrl: "./job-offer-form.component.html",
  }
)
export class JobOfferFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  jobOfferForm = this.formBuilder.group({
    title: [ "" ,Validators.required],
    description: [ "" ,Validators.required],
    salary: [ "" ,Validators.required],
    location: [ "" ,Validators.required],
    company: {},
    profile: [ "" ,Validators.required],
    educationLevel: [ "" ,Validators.required],
    experienceLevel: [""],
    contractType: ["", Validators.required],
  });


  ngOnInit(): void {
    // set company from local storage user
    if (localStorage.getItem("user")) {
      this.jobOfferForm.patchValue({
        company: JSON.parse(localStorage.getItem("user") || "{}")
      });
    }
    }



  addJobOffer() {
    console.log(this.jobOfferForm.value);
  }
}

import {Component, OnInit} from "@angular/core";


@Component(
{
selector: "app-company",
templateUrl: "./company.component.html",
}
)
export class CompanyComponent implements OnInit{
constructor() {}
ngOnInit(): void {
  // check if local storage has a user  item else redirect to login
  if (!localStorage.getItem("user")) {
    window.location.href = "/auth/login";
  }
}

}

import {FormBuilder, Validator, Validators} from "@angular/forms";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
})
export class RegisterFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }


  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    phone: ['', Validators.required],
    city: ['', Validators.required],
    logo: [''],
  });


  saveForm() {
    return console.log("this is the data to save " + this.registerForm);
  }

  ngOnInit(): void {
  }

  register() {
    console.log("register");
  }

  onFileChange($event: Event) {
    // set the file path as string to logo
    this.registerForm.patchValue({
      logo: (<HTMLInputElement>$event.target).value
    });
  }
}

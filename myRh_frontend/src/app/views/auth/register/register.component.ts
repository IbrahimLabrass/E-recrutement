import { Component } from '@angular/core';
import {FormBuilder, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder) { }

  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required, Validators.minLength(10)],
    email: ['' , [Validators.required, Validators.email]],
    password: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    logo: ['']
  });

  register() {
    console.log("form data is ", this.registerForm.value);
  }

  getFilePath(event: any) {
    //set logo value to file name
    this.registerForm.patchValue({
      logo: event.target.files[0].name
    });
  }
}

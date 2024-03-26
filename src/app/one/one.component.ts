import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss'
})
export class OneComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName:[''],
      lastName:[''],
      contactMethod: [''], // Initially no option selected
      phoneNumber: [''],
      emailAddress: ['']
    });    
  }
  submitForm() {
   console.log(this.form.value) 
  }
} 



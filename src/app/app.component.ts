import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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


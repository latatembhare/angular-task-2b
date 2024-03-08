import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss'
})
export class OneComponent {
  @ViewChild('myForm') myForm :NgForm | any
  dynamicNumberDiff = ''
  minlength = 10
  onSubmit(param:any){
    console.log('onsubmit triggerd',param)
    console.log(this.myForm.value)
    if(this.myForm.valid){
    this.myForm.resetForm();
    }
    //  this.myForm.ngSubmit.emit(false)
    // param.reset()
  }
  getPhoneNumberDiff(){
    return Math.abs(this.dynamicNumberDiff.length-this.minlength)
  }
  setDefaultValue(){
   const userVal= {
      "firstName": "Lata",
      "lastName": "Tembhare",
      "userContactDetails": {
          "userEmail": "as@g.com",
          "contact": "6567789237"
      },
      "userBankDetails": {
          "bankName": "123",
          "bankCo": "123",
          "bankAc": "123566"
      }
    }
    this.myForm.setValue(userVal)
  }
  setDefaultPatchValue(){
    this.myForm?.form.patchValue({
      "userContactDetails": {
        "userEmail": "abs@g.com",
      },
    })
  }
} 



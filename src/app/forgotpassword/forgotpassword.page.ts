import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  isValidOTP: boolean = false;
  pinNo: number;
  repinNo:number;
  isPinValid: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  checkOTP() {
    this.isValidOTP = true;
  }
  changePassword() {

  }
  cancel() {
    this.router.navigateByUrl("/login");
  }
  isNumeric() {
    this.isPinValid=true;
    let keyb = <KeyboardEvent>event;
    let keycode = keyb.which ? keyb.which : keyb.keyCode;
    return keycode >= 48 && keycode <= 57;
  }
  changePin(){
    if(this.pinNo!=this.repinNo){
      this.isPinValid=false;
    }
  }
  cancelOTP(){
    this.router.navigateByUrl("/login");
  }
}

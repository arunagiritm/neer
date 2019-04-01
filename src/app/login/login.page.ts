import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  beforeLogin: boolean = true;
  isValid: boolean = false;
  mobileNo: string="";
  pinNo: number;
  constructor(private router: Router,private toastController: ToastController) { }

  ngOnInit() {
  }
  login() {
    this.beforeLogin = false;
  }
  forgotPassword = () => {
    if(this.mobileNo.length <10){
      this.presentToast("Please enter a valid mobile No.");
      return;
    }
    this.router.navigateByUrl("/forgotpassword");
  }
  signUp() {
    this.router.navigateByUrl("/signup");
  }
  cancelVerify() {
    this.beforeLogin = true;
  }
  isNumeric() {
    let keyb = <KeyboardEvent>event;
    let keycode = keyb.which ? keyb.which : keyb.keyCode;
    return keycode >= 48 && keycode <= 57;
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}

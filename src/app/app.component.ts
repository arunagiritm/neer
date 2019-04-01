import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    // {
    //   title: 'Home',
    //   url: '/home',
    //   icon: 'home'
    // },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Forgot Password',
      url: '/forgotpassword',
      icon: 'forgotpassword'
    },
    {
      title: 'Orders',
      url: '/orders',
      icon: 'orders'
    },
    {
      title: 'View Orders',
      url: '/vieworders',
      icon: 'vieworders'
    },
    {
      title: 'Purchase Orders',
      url: '/purchaseorders',
      icon: 'purchaseorders'
    },
    {
      title: 'My Orders',
      url: '/myorders',
      icon: 'myorders'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

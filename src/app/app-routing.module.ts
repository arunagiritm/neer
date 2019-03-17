import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'forgotpassword', loadChildren: './forgotpassword/forgotpassword.module#ForgotpasswordPageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'vieworders', loadChildren: './vieworders/vieworders.module#ViewordersPageModule' },
  { path: 'purchaseorders', loadChildren: './purchaseorders/purchaseorders.module#PurchaseordersPageModule' },
  { path: 'myorders', loadChildren: './myorders/myorders.module#MyordersPageModule' },
  { path: 'viewprofile', loadChildren: './viewprofile/viewprofile.module#ViewprofilePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

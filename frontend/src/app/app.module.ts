import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent } from './feedback/feedback.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChineseComponent } from './chinese/chinese.component';
import { SouthComponent } from './south/south.component';
import { NorthComponent } from './north/north.component';
import { WesternComponent } from './western/western.component';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ChineseadminComponent } from './chineseadmin/chineseadmin.component';
import { NorthadminComponent } from './northadmin/northadmin.component';
import { SouthadminComponent } from './southadmin/southadmin.component';
import { WestadminComponent } from './westadmin/westadmin.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { OrdersComponent } from './orders/orders.component';
import { DietComponent } from './diet/diet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedbackComponent,
    OrderComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    ChineseComponent,
    SouthComponent,
    NorthComponent,
    WesternComponent,
    PaymentComponent,
    HeaderComponent,
    CartComponent,
    ChineseadminComponent,
    NorthadminComponent,
    SouthadminComponent,
    WestadminComponent,
    AdminComponent,
    AdminloginComponent,
    OrdersComponent,
    DietComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [], //the request handling providers are intialized
  bootstrap: [AppComponent]
})
export class AppModule { }

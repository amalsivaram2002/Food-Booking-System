import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { ChineseComponent } from './chinese/chinese.component';
import { WesternComponent } from './western/western.component';
import { SouthComponent } from './south/south.component';
import { NorthComponent } from './north/north.component';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ChineseadminComponent } from './chineseadmin/chineseadmin.component';
import { NorthadminComponent } from './northadmin/northadmin.component';
import { SouthadminComponent } from './southadmin/southadmin.component';
import { WestadminComponent } from './westadmin/westadmin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OrdersComponent } from './orders/orders.component';
import { DietComponent } from './diet/diet.component';
const routes: Routes = [{path:'login',component:LoginComponent},
{path:'',component:HomeComponent},{path:'register',component:RegisterComponent}
,{path:'order',component:OrderComponent},{path:'about',component:AboutComponent},{path:'chinese',component:ChineseComponent}
,{path:'western',component:WesternComponent},{path:'south',component:SouthComponent},{path:'north',component:NorthComponent}
,{path:'payment',component:PaymentComponent},{path:'header',component:HeaderComponent},{path:'cart',component:CartComponent},
{path:'chineseadmin',component:ChineseadminComponent},{path:'northadmin',component:NorthadminComponent},{path:'southadmin',component:SouthadminComponent},
{path:'westadmin',component:WestadminComponent},{path:'admin',component:AdminComponent},{path:'adminlogin',component:AdminloginComponent},{path:'feedback',component:FeedbackComponent},{path:'orders',component:OrdersComponent},
{path:'diet',component:DietComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { QuotationComponent } from './quotation/quotation.component';
import { RegisterComponent} from './register/register.component'
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { TransportationComponent } from './transportation/transportation.component';

const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'home',component:HomeComponent },
  {path:'login',component:LoginPageComponent },
  {path:'register', component: RegisterComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'privacy-policy', component: PrivacyPolicyComponent },
  {path:'terms-and-condition', component: TermsAndConditionComponent },
  {path:'transportation' , component:TransportationComponent},
  {path:'quotation' , component:QuotationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

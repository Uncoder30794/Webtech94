import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componets/auth/error/error.component';
import { LoginComponent } from './componets/auth/login/login.component';
import { SignupComponent } from './componets/auth/signup/signup.component';
import { AboutComponent } from './componets/pages/about/about.component';
import { BlogComponent } from './componets/pages/blog/blog.component';
import { ContactComponent } from './componets/pages/contact/contact.component';
import { HomeComponent } from './componets/pages/home/home.component';
import { ServiceComponent } from './componets/pages/service/service.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  {path:"home" ,component:HomeComponent},
  {path:"about" ,component:AboutComponent},
  {path:"service" ,component:ServiceComponent},
  {path:"contact" ,component:ContactComponent},
  {path:"blog" ,component:BlogComponent},
  {path:"login" ,component:LoginComponent},
  {path:"singup" ,component:SignupComponent},
  {path:"error" ,component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

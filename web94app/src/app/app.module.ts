import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/auth/login/login.component';
import { SignupComponent } from './componets/auth/signup/signup.component';
import { ErrorComponent } from './componets/auth/error/error.component';
import { HomeComponent } from './componets/pages/home/home.component';
import { AboutComponent } from './componets/pages/about/about.component';
import { ContactComponent } from './componets/pages/contact/contact.component';
import { BlogComponent } from './componets/pages/blog/blog.component';
import { ServiceComponent } from './componets/pages/service/service.component';
import { NavbarComponent } from './componets/pages/navbar/navbar.component';
import { FooterComponent } from './componets/pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    ServiceComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

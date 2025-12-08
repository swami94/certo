import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { IphoneComponent } from './navigatingcomponents/iphone/iphone.component';
import { AndroidComponent } from './navigatingcomponents/android/android.component';
import { HelpComponent } from './navigatingcomponents/help/help.component';
import { CompanyComponent } from './navigatingcomponents/company/company.component';
import { SigninComponent } from './navigatingcomponents/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    IphoneComponent,
    AndroidComponent,
    HelpComponent,
    CompanyComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

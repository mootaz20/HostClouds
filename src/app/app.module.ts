import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './home/banner/banner.component';
import { TRUSTEDComponent } from './home/trusted/trusted.component';
import { PlansComponent } from './home/plans/plans.component';
import { FeaturesComponent } from './home/features/features.component';
import { AboutComponent } from './home/about/about.component';
import { BackgroundComponent } from './about-us/background/background.component';
import { TeamComponent } from './about-us/team/team.component';
import { HeaderComponent } from './about-us/header/header.component';
import { BannerSerComponent } from './services/banner-ser/banner-ser.component';
import { HostinServicesComponent } from './services/hostin-services/hostin-services.component';
import { BannerContactComponent } from './contact/banner-contact/banner-contact.component';
import { ContactUSComponent } from './contact/contact-us/contact-us.component';
import { MapCompComponent } from './contact/map-comp/map-comp.component';
import { HomeServicesComponent } from './home/home-services/home-services.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    TRUSTEDComponent,
    PlansComponent,
    FeaturesComponent,
    AboutComponent,
    BackgroundComponent,
    TeamComponent,
    HeaderComponent,
    BannerSerComponent,
    HostinServicesComponent,
    BannerContactComponent,
    ContactUSComponent,
    MapCompComponent,
    HomeServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

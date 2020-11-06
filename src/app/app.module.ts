import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxHeadroomModule } from 'ngx-headroom';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHeadroomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

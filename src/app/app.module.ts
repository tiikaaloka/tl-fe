import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxHeadroomModule } from 'ngx-headroom';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { AdhyayanaPageComponent } from './adhyayana-page/adhyayana-page.component';
import { DhaatukaarikaComponent } from './dhaatukaarika/dhaatukaarika.component';
import { YuddhaComponent } from './yuddha/yuddha.component';
import { SuvarnachashakaComponent } from './suvarnachashaka/suvarnachashaka.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { RamayanaComponent } from './ramayana/ramayana.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    FooterComponent,
    AdhyayanaPageComponent,
    DhaatukaarikaComponent,
    YuddhaComponent,
    SuvarnachashakaComponent,
    AboutPageComponent,
    DonatePageComponent,
    TermsComponent,
    PrivacyComponent,
    EditComponent,
    OrderComponent,
    RamayanaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    NgxHeadroomModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

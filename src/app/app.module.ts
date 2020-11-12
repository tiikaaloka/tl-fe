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
    AboutPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgxHeadroomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

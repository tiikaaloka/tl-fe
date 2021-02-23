import { RamayanaComponent } from './ramayana/ramayana.component';
import { OrderComponent } from './order/order.component';
import { EditComponent } from './edit/edit.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { YuddhaComponent } from './yuddha/yuddha.component';
import { DhaatukaarikaComponent } from './dhaatukaarika/dhaatukaarika.component';
import { AdhyayanaPageComponent } from './adhyayana-page/adhyayana-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SuvarnachashakaComponent } from './suvarnachashaka/suvarnachashaka.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent },
  { path: 'donate', component: DonatePageComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'adhyayanam', component: AdhyayanaPageComponent },
  { path: 'dhaatukaarika', component: DhaatukaarikaComponent },
  { path: 'yuddha', component: YuddhaComponent },
  { path: 'suvarnachashaka', component: SuvarnachashakaComponent },
  { path: 'edit', component: EditComponent },
  { path: 'books', component: OrderComponent },
  { path: 'data', component: RamayanaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { YuddhaComponent } from './yuddha/yuddha.component';
import { DhaatukaarikaComponent } from './dhaatukaarika/dhaatukaarika.component';
import { AdhyayanaPageComponent } from './adhyayana-page/adhyayana-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SuvarnachashakaComponent } from './suvarnachashaka/suvarnachashaka.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'adhyayanam', component: AdhyayanaPageComponent },
  { path: 'dhaatukaarika', component: DhaatukaarikaComponent },
  { path: 'yuddha', component: YuddhaComponent },
  { path: 'suvarnachashaka', component: SuvarnachashakaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

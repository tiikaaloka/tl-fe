import { SampadanaModule } from './sampadana/sampadana.module';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    SampadanaModule
  ],
  bootstrap: [AppComponent, SampadanaModule],
})
export class AppServerModule {}

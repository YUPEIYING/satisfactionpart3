import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExtentComponent } from './extent/extent.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './counter/counter.component';
import { RatingComponent } from './rating/rating.component';
import { InputpageComponent } from './inputpage/inputpage.component';
import { InputDbService } from './inputpage/input-db.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ExtentComponent,
    MainComponent,
    CounterComponent,
    RatingComponent,
    InputpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InputDbService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

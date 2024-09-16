import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './includes/promise/promise.component';
import { ObservableComponent } from './includes/observable/observable.component';
import { AllComponent } from './includes/observable/all/all.component';
import { FromEventComponent } from './includes/observable/from-event/from-event.component';
import { IntervalComponent } from './includes/interval/interval.component';
import { ToArrayComponent } from './includes/to-array/to-array.component';
import { CustomObservableComponent } from './includes/observable/custom-observable/custom-observable.component';
import { MapComponent } from './includes/observable/all/map/map.component';
import { PluckComponent } from './includes/observable/all/pluck/pluck.component';
import { FilterComponent } from './includes/observable/all/filter/filter.component';
import { MergemapComponent } from './includes/observable/all/mergemap/mergemap.component';
import { ConcatmapComponent } from './includes/observable/all/concatmap/concatmap.component';
import { SwitchmapComponent } from './includes/observable/all/switchmap/switchmap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    MergemapComponent,
    ConcatmapComponent,
    SwitchmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

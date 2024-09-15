import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntervalComponent } from './includes/interval/interval.component';
import { AllComponent } from './includes/observable/all/all.component';
import { FilterComponent } from './includes/observable/all/filter/filter.component';
import { MapComponent } from './includes/observable/all/map/map.component';
import { PluckComponent } from './includes/observable/all/pluck/pluck.component';
import { CustomObservableComponent } from './includes/observable/custom-observable/custom-observable.component';
import { FromEventComponent } from './includes/observable/from-event/from-event.component';
import { ObservableComponent } from './includes/observable/observable.component';
import { PromiseComponent } from './includes/promise/promise.component';
import { ToArrayComponent } from './includes/to-array/to-array.component';
import { MergemapComponent } from './includes/observable/all/mergemap/mergemap.component';
import { ConcatmapComponent } from './includes/observable/all/concatmap/concatmap.component';

const routes: Routes = [
  {path : 'promise', component : PromiseComponent},
  {path : 'observable', component : ObservableComponent, children : [
    {path : '', component : AllComponent}, //making empty path , this means if route has observable, by default list component willl be redirected.
    {path : 'fromEvent', component : FromEventComponent},
    {path : 'interval', component : IntervalComponent},
    {path : 'toArray', component : ToArrayComponent},
    {path : 'customObs', component : CustomObservableComponent},
    {path : 'map', component : MapComponent},
    {path : 'pluck', component : PluckComponent},
    {path : 'filter', component : FilterComponent},
    {path : 'merge-map', component : MergemapComponent},
    {path : 'concat-map', component : ConcatmapComponent}
  ]},
  {path : '**', redirectTo : 'promise'} //This will redirect any unmatched /non-existing route to promise component.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

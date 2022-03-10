import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './includes/promise/promise.component';

const routes: Routes = [
  {path : 'promise', component : PromiseComponent},
  {path : '**', redirectTo : 'promise'} //This will redirect any unmatched /non-existing route to promise component.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

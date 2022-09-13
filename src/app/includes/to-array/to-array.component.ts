import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  sourceSubscription = new Subscription();
  constructor() { }

  ngOnInit(): void {
    const source = interval(1000);
    this.sourceSubscription = source.pipe(
      take(5),
      toArray()
      )
    .subscribe((res : any ) => {
      console.log(res);
      // if(res >= 8){
      //     this.sourceSubscription.unsubscribe();
      // }
      // This won't reach this block as the source datais converted to array and we can't compare an array element
      // to any res. 
    });
   
  }

}

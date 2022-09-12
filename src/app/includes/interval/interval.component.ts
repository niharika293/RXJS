import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  
  broadCastMsg : string = '';
  broadCastSubscription!: Subscription; 
  vidList : any = []; 

  constructor() { }

  ngOnInit(): void {
    // const broadCastTime = interval(1000);
    // can also use timer here , if 1arg --> emit something after the defined arg & then complete,since no other arg.
    // if 2 args -  how often to emit subsequent values after a given duration.
    const broadCastTime = timer(2000,1000);
    this.broadCastSubscription = broadCastTime.subscribe((res : any ) => {
        this.broadCastMsg = 'Video '+ res;
        this.vidList.push(this.broadCastMsg);
        if(res >= 5){
          this.broadCastSubscription.unsubscribe();
        } // here last - 5 value will also get emitted.
    });
    // This will go on till infinity, unless unsubscribed. 
  }

}

import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map, mergeMap, switchAll, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  mapList : any = [];
  mapPlusSwitchAllList : any = [];
  switchMapList : any = [];
  mergeMapList : any = [];
  concatMapList : any = [];

  constructor() { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comeedy', 'News']);

    // Using Map : 

    source.pipe(
      map(res => this.getData(res))
    )
    .subscribe(res => console.log(res)); 
    // since getData is also returning observable, hence we need to subscribe again.

    source.pipe(
      map(res => this.getData(res))
    ).subscribe(
      res => res.subscribe(res2 => {
        console.log("res2", res2);
        this.mapList.push(res2);
      })
    );

    // Map + switchAll : only emits the latest emission. prev emissions are cancelled. 

    source.pipe(
      map(res => this.getData(res)),
      switchAll()
    ).subscribe(
      res => {
        console.log(res);
        this.mapPlusSwitchAllList.push(res);
      }
    );

    // mergeMap

    source.pipe(
      mergeMap(res => this.getData(res)),
     ).subscribe(
       res => {
         console.log(res);
         this.mergeMapList.push(res);
       }
     );

    //concatMap

    source.pipe(
      concatMap(res => this.getData(res)),
     ).subscribe(
       res => {
         console.log(res);
         this.concatMapList.push(res);
       }
     );


    // switchMap 

    source.pipe(
     switchMap(res => this.getData(res)),
    ).subscribe(
      res => {
        console.log(res);
        this.switchMapList.push(res);
      }
    );

  }
  
  getData(data: any){
    return of(`${data} Video Uploaded`).pipe(delay(2000));
  }

}

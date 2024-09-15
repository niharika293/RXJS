import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {

  mapList : any = [];
  mapPlusConcatAllList : any = [];
  concatMapList : any = [];
  mergeMapList : any = [];

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

    // map + concatAll : ensures data comes sequentially in the order in which it is present.

    source.pipe(
      map(res => this.getData(res)),
      concatAll()
    ).subscribe(
      res => {
        console.log("map + concatAll",res);
        this.mapPlusConcatAllList.push(res);
      }
    );

    //mergeMap : initially takes a delay of 2s then emits all the values at once.

    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(
      res => {
        console.log("mergeMap",res);
        this.mergeMapList.push(res);
      }
    );

    // concatMap : sequential emission, without previous emissions, next emissions don't happen.

    source.pipe(
      concatMap(res => this.getData(res))
    ).subscribe(
      res => {
        console.log("concatmap",res);
        this.concatMapList.push(res);
      }
    )

  }

  getData(data: any){
    return of(`${data} Video Uploaded`).pipe(delay(2000));
  }

}

import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  mapList : any = [];
  mapPlusMergeAllList : any = [];
  mergeMapList : any = [];
  constructor() { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);
    // without using map :: subscribing to nested observables - tricky. 
    // source.subscribe((res : any) => {
    //   console.log("res", res);
    //   of(res).subscribe((res2 : any) => {
    //     console.log(this.getData(res2))
    //   });
    // });
    
    // source.pipe(
    //   map(res => this.getData(res))
    // ).subscribe((res) => {
    //   console.log(res);
    // }); // this returns observable, so we need to subscribe again. 

    source.pipe(
      map(res => this.getData(res))
    ).subscribe((res) => res.subscribe(res2 => {
      console.log(res2); 
      this.mapList.push(res2);
      // Now we're getting proper output. 
      // Tech Video Uploaded
      // Comedy Video Uploaded
      // News Video Uploaded
    }));

    // "map + merge all : No need to subscribe again & again
    source.pipe(
      map(res => this.getData(res)),
      mergeAll() //flattens observable of observables. 
    ).subscribe((res) => {
      console.log("map + merge all response", res);
      this.mapPlusMergeAllList.push(res);
    });

    //mergeMap = map + merge All 

    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe((res) => {
      console.log("from mergeMap", res);
      this.mergeMapList.push(res);
    });

  }

  getData(data: any){
    // return (`${data} Video Uploaded`);  // without using map use this. 
    return of (`${data} Video Uploaded`);
  }

}

import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { filter } from 'rxjs/internal/operators/filter';
import { toArray } from 'rxjs/internal/operators/toArray';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  batter : any = [
    { "id": "1001", "type": "Regular" },
    { "id": "1002", "type": "Chocolate" },
    { "id": "1003", "type": "Blueberry" },
    { "id": "1004", "type": "Devil's Food" }
  ];
  batter$ = from(this.batter);
  batterList : any ;

  sub1 !: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.sub1 = this.batter$.pipe(
      filter((batter : any) => (batter.id)%2 === 0),
      toArray()
    )
    .subscribe((res) => {
      console.log(res);
      this.batterList = res;
    });
  }

}

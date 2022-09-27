import { Component, OnInit } from '@angular/core';
import { from, interval, observable, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  obs1 = interval(1000);
  sub1!: Subscription;
  sub2!: Subscription;
  sub3!: Subscription;


  msg : string = '';
  msg2 : any ;
  msg3 : any  = []; 

  topping =  [
    { "id": "5001", "type": "None" },
    { "id": "5002", "type": "Glazed" },
    { "id": "5005", "type": "Sugar" },
    { "id": "5007", "type": "Powdered Sugar" },
    { "id": "5006", "type": "Chocolate with Sprinkles" },
    { "id": "5003", "type": "Chocolate" },
    { "id": "5004", "type": "Maple" }
  ];

  topping$ = from(this.topping); //converts to observable streams

  constructor() { }

  ngOnInit(): void {
    // Ex 01
    this.sub1 = this.obs1.pipe(
      map(data => `Video `+ data)
    )
    .subscribe((res) => {
     this.msg = res;
    });

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

     // Ex 02
     this.sub2 = this.obs1.pipe(
      map(data => data*10)
    )
    .subscribe((res) => {
     this.msg2 = res;
    });

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);

    // Ex - 03

    this.sub3 = this.topping$.pipe(
      map(data => data.type)
    )
    .subscribe((res) => {
      // console.log(res);
      this.msg3.push(res);
    });

    setTimeout(()=> {
      this.sub3.unsubscribe();
    }, 10000);
    
    
  }

}

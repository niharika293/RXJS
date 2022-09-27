import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  batter : any = [
    { "id": "1001", "type": "Regular" },
    { "id": "1002", "type": "Chocolate" },
    { "id": "1003", "type": "Blueberry" },
    { "id": "1004", "type": "Devil's Food" }
  ];
  batter$ = from(this.batter);
  sub1 !: Subscription;
  sub2 !: Subscription;

  nameList : any = [];
  jobsList : any;

  actors : any = [
    {
      "name": "Tom Cruise",
      "age": 56,
      "Born At": "Syracuse, NY",
      "Birthdate": "July 3, 1962",
      "photo": "https://jsonformatter.org/img/tom-cruise.jpg",
      "wife": null,
      "weight": 67.5,
      "hasChildren": true,
      "hasGreyHair": false,
      "children": [
        "Suri",
        "Isabella Jane",
        "Connor"
      ],
      "job" : {
        title : 'Actor',
        exp : 20 
      }
    },
    {
      "name": "Robert Downey Jr.",
      "age": 53,
      "Born At": "New York City, NY",
      "Birthdate": "April 4, 1965",
      "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg",
      "wife": "Susan Downey",
      "weight": 77.1,
      "hasChildren": true,
      "hasGreyHair": false,
      "children": [
        "Indio Falconer",
        "Avri Roel",
        "Exton Elias"
      ],
      "job" : {
        title : 'Actor',
        exp : 30 
      }
    }
  ];

  actors$ = from(this.actors);


  constructor() { }

  ngOnInit(): void {
    this.sub1 = this.batter$.pipe(
      pluck('type')
    )
    .subscribe((res) => {
      this.nameList.push(res);
      // console.log(res);
    });

    this.sub2 = this.actors$.pipe(
      pluck('job', 'title'), //way to access nested property, if not found then returns undefined
      toArray()
    )
    .subscribe((res) => {
      console.log(res);
      this.jobsList = res;
    });


  }

}

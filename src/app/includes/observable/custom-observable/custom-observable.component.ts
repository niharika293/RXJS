import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {

  techlist : any = [];
  status : string = '';
  techList2 : any = ['Angular', 'Typescript', 'Javascript', 'HTML', 'CSS'];
  namesList : any = ['Amitabh Bachhan', 'Tarak Mehta'];
  currentName : string = '';
  constructor() { }

  ngOnInit(): void {
    // Example - 1 {manual}

    const custObs1 = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);
      setTimeout(() => {
        observer.next('HTML & CSS');
      }, 3000);
      setTimeout(() => {
        observer.next('Jquery');
        // observer.complete(); 
        observer.error('Limit Exceeded');
        // Once error occurs, next notofications won't arrive, excecution will be stopped right here. 
      }, 4000);
      setTimeout(() => {
        observer.next('Bootstrap');
        observer.complete(); 
        // Once observer completes, new next notofications won't arrive, excecution will be stopped right here. 
      }, 5000);
    });

    custObs1.subscribe((res) => {
      // console.log(res);
      this.techlist.push(res);
    }, (err) => {
        this.status = 'error';
    }, () => {
        this.status = 'completed';
    });

    // Example - 2 {Custom interval}

    const custObs2 = new Observable((observer) => {
      let count = 0; 
      setInterval(()=> {
        observer.next(this.techList2[count]);
        count++;
        if(count >= this.techList2.length){
          observer.complete();
        }
      },1000);
    });

    custObs2.subscribe((res) => {
      // console.log(res);
    });

    // Example 3 - Random Names 

    const custObs3 = new Observable((observer) => {
      let i =0;
      setInterval(() => {
        observer.next(this.namesList[i]);
        i++;
        if(i >= this.namesList.length){
          observer.complete();
        }
      }, 1000);
    });
    
    custObs3.subscribe((res : any) => {
      console.log(res);
      this.currentName = res;
    });


  }

}

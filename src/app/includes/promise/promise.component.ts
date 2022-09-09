import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  public promiseVal : any;

  ngOnInit(): void {
    // either the promise rejects or resolves. Both can't happen!
    let buylaptop = new Promise((resolve, reject) => {
      // // resolve("Promise is resolved.");
      // reject('Promise is rejected! ');

      // *******Snippet -2 *******

      if(this.isDellAvailable()){
         setTimeout(() => {
          resolve("Dell is Purchased!");
        }, 3000);
      }
      else if(this.isHPAvailable()){
         setTimeout(() => {
          resolve("HP is Purchased!!");
        }, 3000);
      }
      else {
        setTimeout(() => {
          reject("Nothing purchased! Laptop Not available on store...Try again later");
        }, 3000);
      }
    });

    buylaptop.then((res) => {
      console.log("from resolve parameter..executed by .then()", res);
      this.promiseVal = res;
    }).catch((err) => {
      console.error("from reject paramater..executed by .catch()", err);
      this.promiseVal = err;
    })

  }

  isDellAvailable(){
    return false;
  }

  isHPAvailable(){
    return true;
  }

}

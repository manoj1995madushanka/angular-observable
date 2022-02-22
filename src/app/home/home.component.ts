import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {error} from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  firstObservableSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    // interval is build in function that returns count after each 1000ms
    /*this.firstObservableSubscription = interval(1000).subscribe(
      (count) => {
        console.log(count);
      }
    );*/

    // defining custom observable for do same thing we did above
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          observer.error(new Error('count is greater than 3'));
        }
        count++;
      }, 1000);
    });

    this.firstObservableSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    // this subscription will close when user navigate to another route
    this.firstObservableSubscription.unsubscribe();
  }

}

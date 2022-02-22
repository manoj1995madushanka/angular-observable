import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

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
    this.firstObservableSubscription = interval(1000).subscribe(
      (count) => {
        console.log(count);
      }
    );
  }

  ngOnDestroy() {
    // this subscription will close when user navigate to another route
    this.firstObservableSubscription.unsubscribe();
  }

}

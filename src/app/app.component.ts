import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  userActivated = false;
  subjectActivated = false;

  subjectSubscription: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // listen to event
    this.userService.activatedEmitter.subscribe(
      didActivated => {
        this.userActivated = didActivated;
      }
    );

    // listen to subject
    this.subjectSubscription = this.userService.activatedSubject.subscribe(
      didActivated => {
        this.subjectActivated = didActivated;
      }
    );
  }

  ngOnDestroy(): void {
    this.subjectSubscription.unsubscribe();
  }
}

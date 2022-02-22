import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activatedEmitter = new EventEmitter<boolean>();

  // using subject is more efficient than event
  activatedSubject = new Subject<boolean>();

  constructor() {
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this is angular built in observable
    // for this observable we do not need to manually unsubscribe angular will handle that
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
}

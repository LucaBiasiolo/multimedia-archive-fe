import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-page-not-found',
  styleUrls: ['./page-not-found.component.scss'],
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent implements OnInit {

  public countdown: Observable<number> = interval(1000).pipe(take(6));

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.countdown.subscribe(
      (): void => {},
      (): void => {},
      (): void => {
        this.router.navigate(['/home']);
      });
  }
}

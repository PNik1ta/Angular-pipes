import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // e: number = Math.E;
  // str: string = 'hello world';
  // date: Date = new Date();
  // float: number = 0.42;

  // obj: object = {
  //   a: 1,
  //   b: {
  //     c: 2,
  //     d: {
  //       e: 3,
  //       f: 4
  //     }
  //   }
  // }

  // search: string = '';

  // posts: Post[] = [
  //   { title: 'Beer', text: 'Some beer' },
  //   { title: 'Bread', text: 'Some bread' },
  //   { title: 'JavaScript', text: 'Javascript the best language' }
  // ]

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 4000)
  });

  date: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  });
}

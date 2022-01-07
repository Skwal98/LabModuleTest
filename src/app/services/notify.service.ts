import { Injectable } from '@angular/core';
import { EagerFirstModule } from '../eager-first/eager-first-module';
import { LazyFirstModule } from '../lazy-first/lazy-first-module';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  constructor() {
    console.log('notify service created');
  }
}

/*
-> providedIn: EagerFirstModule,
=> we can inject service in all eager module

*/

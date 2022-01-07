import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-lazy-first',
  templateUrl: './lazy-first.component.html',
  styleUrls: ['./lazy-first.component.scss'],
})
export class LazyFirstComponent implements OnInit {
  //If we provide component with providedIn: EagerModule
  //we can inject service (as singleton)
  //-----
  //If we provide component with providedIn: LazyModule
  //we cann't inject service (cycle error)
  //fix: create lazySharedModule
  //not good practive, possible use proviedIn: root?
  constructor(service: NotifyService) {}

  ngOnInit(): void {}
}

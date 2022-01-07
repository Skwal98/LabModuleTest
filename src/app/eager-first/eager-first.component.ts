import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eager-first',
  templateUrl: './eager-first.component.html',
  styleUrls: ['./eager-first.component.scss'],
})
export class EagerFirstComponent implements OnInit {
  //If we provide component with providedIn: LazyModule
  //we can't inject service!
  constructor() {}

  ngOnInit(): void {}
}

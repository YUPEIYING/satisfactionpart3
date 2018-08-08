import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counternumber = '1';
  person = '王大華';

  constructor() { }

  ngOnInit() {
  }

}

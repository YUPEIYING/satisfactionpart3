import { Component, OnInit } from '@angular/core';
import { ExtentService } from '../extent.service';
import { InputService } from '../inputpage/input.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  number5 = '非常滿意';
  number4 = '滿意';
  number3 = '普通';
  number2 = '不滿意';
  number1 = '非常不滿意';
  empNO: string;
  degree: number;

  constructor(private extendSvc: ExtentService, private input: InputService) {}

  ngOnInit() {

  }

  empno() {
    this.empNO = this.input.empno;
  }

  onClickChange() {
    console.log(this.empNO, this.degree);
    // this.extendSvc.addsatisfydegree(this);
    this.extendSvc.addsatisfydegree(this.empNO, this.degree)
    .subscribe(
    (customersatisfaction) => {
      console.log(customersatisfaction);
    });
  }
}

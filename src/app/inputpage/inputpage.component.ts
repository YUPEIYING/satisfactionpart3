import { Component, OnInit } from '@angular/core';
import { InputService } from './input.service';

@Component({
  selector: 'app-inputpage',
  templateUrl: './inputpage.component.html',
  styleUrls: ['./inputpage.component.css']
})
export class InputpageComponent implements OnInit {

  Name: any;

  constructor(private inputservice: InputService) { }

  input(NO: number, ID: string ): void {

    this.inputservice.getCounterstaff(NO, ID)
    .subscribe(
      (counterstaff) => {
        this.Name = counterstaff.name;
        console.log(counterstaff.name);
    });
    console.log(NO, ID);
  }

  ngOnInit() {
  }

}

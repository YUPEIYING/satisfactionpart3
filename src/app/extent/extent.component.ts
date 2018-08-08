import { Component, OnInit, Input } from '@angular/core';
import { ExtentService } from '../extent.service';

@Component({
  selector: 'app-extent',
  templateUrl: './extent.component.html',
  styleUrls: ['./extent.component.css']
})



export class ExtentComponent implements OnInit {

  thank = '感 謝 您 協 助 我 們 改 善 服 務 !';
  Ethank = 'Thank you for your feedback !';
  stringx: string;

  constructor(private extentService: ExtentService) {}

  ngOnInit() {
   this.stringx = this.extentService.Showword;
  }
}

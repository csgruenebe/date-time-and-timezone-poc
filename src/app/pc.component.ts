import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-pc',
  template: `
    <div class="pc">
      <div class="pcInner" [ngStyle]="style">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `.pc {
      width:300px;
      height:230px;
      padding:35px;
      background-size: 372px auto;
      background-repeat: no-repeat;
      background-image: url('./assets/pc.png');
    }`,
    `.pcInner {
      width:100%;
      height: 100%;
      background-position-x: 240px;
      background-position-y: 130px;
      background-size: 60px auto;
      background-repeat: no-repeat;
    }`,
  ]
})
export class PcComponent implements OnInit, OnChanges {
  fileSuffix: string;
  style = {
    backgroundImage: '',
  };

  @Input()
  type: string;

  ngOnInit() {
    if (this.type === 'Europe/Berlin') {
      this.fileSuffix = 'germany';
    }
    if (this.type === 'Europe/London') {
      this.fileSuffix = 'united_kingdom';
    }
    if (this.type === 'America/New_York') {
      this.fileSuffix = 'united_states';
    }
    if (this.type === 'Japan') {
      this.fileSuffix = 'japan';
    }
    if (this.type === 'Asia/Singapore') {
      this.fileSuffix = 'singapore';
    }
    if (this.type === 'Asia/Hong_Kong') {
      this.fileSuffix = 'hong_kong';
    }
    if (this.type === 'Database') {
      this.fileSuffix = 'database';
    }
    this.style.backgroundImage = `url('./assets/flag_${this.fileSuffix}.svg')`;
  }

  ngOnChanges() {
    this.ngOnInit();
  }

}

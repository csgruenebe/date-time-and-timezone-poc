import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-mac',
  template: `
    <div
      class="mac"
      [ngStyle]="style"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    '.mac { background-size: 100% auto; padding:35px; width:300px; height:230px; background-repeat: no-repeat;}',
  ]
})
export class MacComponent implements OnInit, OnChanges {
  fileSuffix: string;
  style = {
    backgroundImage: '',
  };

  @Input()
  type: string;

  ngOnInit() {
    if (this.type === 'Europe/Berlin') {
      this.fileSuffix = 'de';
    }
    if (this.type === 'Europe/London') {
      this.fileSuffix = 'uk';
    }
    if (this.type === 'America/New_York') {
      this.fileSuffix = 'us';
    }
    if (this.type === 'Japan') {
      this.fileSuffix = 'ja';
    }
    if (this.type === 'Asia/Singapore') {
      this.fileSuffix = 'si';
    }
    if (this.type === 'Asia/Hong_Kong') {
      this.fileSuffix = 'ho';
    }
    if (this.type === 'Database') {
      this.fileSuffix = 'db';
    }
    this.style.backgroundImage = `url('./assets/mac-${this.fileSuffix}.jpg')`;
  }

  ngOnChanges() {
    this.ngOnInit();
  }

}

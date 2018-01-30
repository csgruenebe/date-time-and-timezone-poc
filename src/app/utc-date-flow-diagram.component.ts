import { Component } from '@angular/core';

@Component({
  selector: 'app-utc-date-flow-diagram',
  template: `<div style="width:100%;">
    <a href="./assets/utc-date-flow.svg" target="_blank"><img src="./assets/utc-date-flow.svg" class="img"/></a>
  </div>`,
  styles: [
    `.img { width:100%; }`,
  ]
})
export class UtcDateFlowDiagramComponent {}

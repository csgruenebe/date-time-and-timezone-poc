import { Component } from '@angular/core';
import { sharedStyles } from '../app.styles';

@Component({
  selector: 'bdd-and',
  template: `
    <div class="bdd-row">
      <div class="bdd-and-label">And:</div>
      <div class="bdd-and-text"><ng-content></ng-content></div>
    </div>
  `,
  styles: [].concat(sharedStyles)
})
export class BddAndComponent {}

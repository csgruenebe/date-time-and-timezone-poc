import { Component } from '@angular/core';
import { sharedStyles } from '../app.styles';

@Component({
  selector: 'bdd-given',
  template: `
    <div class="bdd-row">
      <div class="bdd-given-label">Given:</div>
      <div class="bdd-given-text"><ng-content></ng-content></div>
    </div>
  `,
  styles: [].concat(sharedStyles)
})
export class BddGivenComponent {}

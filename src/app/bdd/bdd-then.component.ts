import { Component } from '@angular/core';
import { sharedStyles } from '../app.styles';

@Component({
  selector: 'bdd-then',
  template: `
    <div class="bdd-row">
      <div class="bdd-then-label">Then:</div>
      <div class="bdd-then-text"><ng-content></ng-content></div>
    </div>
  `,
  styles: [].concat(sharedStyles)
})
export class BddThenComponent {}

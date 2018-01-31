import { Component } from '@angular/core';
import { sharedStyles } from '../app.styles';

@Component({
  selector: 'bdd-when',
  template: `
    <div class="bdd-row">
      <div class="bdd-when-label">When:</div>
      <div class="bdd-when-text"><ng-content></ng-content></div>
    </div>
  `,
  styles: [].concat(sharedStyles)
})
export class BddWhenComponent {}

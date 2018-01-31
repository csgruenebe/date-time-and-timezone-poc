import { Component } from '@angular/core';
import { sharedStyles } from '../app.styles';

@Component({
  selector: 'bdd-feature',
  template: `
    <div class="bdd-row">
      <div class="bdd-feature-label">Feature:</div>
      <div class="bdd-feature-text"><ng-content></ng-content></div>
    </div>
  `,
  styles: [].concat(sharedStyles)
})
export class BddFeatureComponent {}

import { Component } from '@angular/core';
import { sharedStyles } from '../app.styles';

@Component({
  selector: 'bdd-scenario',
  template: `
    <div class="bdd-row" style="margin-top:20px;">
      <div class="bdd-scenario-label">Scenario:</div>
      <div class="bdd-scenario-text"><ng-content></ng-content></div>
    </div>
  `,
  styles: [].concat(sharedStyles)
})
export class BddScenarioComponent {}

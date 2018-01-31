import { Component } from '@angular/core';
import { sharedStyles } from '../app.styles';

@Component({
  selector: 'bdd-code',
  template: `<span class="bdd-code"><ng-content></ng-content></span>`,
  styles: [].concat(sharedStyles)
})
export class BddCodeComponent {}

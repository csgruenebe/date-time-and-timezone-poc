import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mac',
  template: `
    <div
      class="mac"
      [class.macDe]="type === 'de'"
      [class.macUk]="type === 'uk'"
      [class.macUs]="type === 'us'"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    '.mac { background-size: 100% auto; padding:35px; width:300px; height:230px; background-repeat: no-repeat;}',
    `.macDe { background-image: url('./assets/mac-de.jpg'); }`,
    `.macUk { background-image: url('./assets/mac-uk.jpg'); }`,
    `.macUs { background-image: url('./assets/mac-us.jpg'); }`,
  ]
})
export class MacComponent {

  @Input()
  type: string;

}

import {Component, Input} from '@angular/core';

export interface AwReadOnlyTextControlDefinition {
  id: string;
  name: string;
  type?: string;
}

@Component({
  selector: 'aw-readonly-text',
  template: `
    <div class="form-group">
      <label [attr.for]="id" class="control-label">
        {{ label | translate}}
      </label>
      <div class="aw-normal-text" id="{{ id }}">
        {{ value }}
      </div>
    </div>
  `
})
export class AwReadOnlyText {
  @Input('id')
  public id: string;

  @Input('label')
  public label: string;

  @Input('value')
  public value: any;
}


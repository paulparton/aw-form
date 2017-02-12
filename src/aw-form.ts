import {Component, Input, Output, EventEmitter, OnInit, QueryList, ContentChildren} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AwInputText} from './aw-input/aw-input';
// import {AwDateTime} from './aw-date-time/aw-date-time';
// import {AwSelect} from './aw-select/aw-select';
// import {AwTextArea} from './aw-textarea/aw-textarea';


@Component({
  selector: 'aw-form',
  template: require('./aw-form.html'),
  // templateUrl: 'aw-form.html'
})
export class AwForm {

  @Input('formGroup')
  public formGroup: FormGroup;

  @Output('awSubmit')
  public onSubmit: EventEmitter<any> = new EventEmitter();

  @ContentChildren(AwInputText, {descendants: true})
  public awInputComponents: QueryList<AwInputText>;

  // @ContentChildren(AwDateTime, {descendants: true})
  // public awDatePickerComponents: QueryList<AwDateTime>;
  //
  // @ContentChildren(AwSelect, {descendants: true})
  // public awSelectComponents: QueryList<AwSelect>;
  //
  // @ContentChildren(AwTextArea, {descendants: true})
  // public awTextAreaComponents: QueryList<AwTextArea>;

  private initialised;

  constructor() {}

  /** Build the form **/
  public ngAfterContentChecked() {

    // Only initialise the form group once
    if (!this.initialised) {
      this.initialised = true;
      this.addAwInputsToForm(this.awInputComponents);
      // this.addAwInputsToForm(this.awDatePickerComponents);
      // this.addAwInputsToForm(this.awSelectComponents);
      // this.addAwInputsToForm(this.awTextAreaComponents);
    }

  }

  /** We could use ngChanges here to handle dynamically adding and removing awInputs */

  /**
   * Add an a FormControl from an awInput component to this FormGroup
   * @param awInputs
   */
  private addAwInputsToForm (awInputs) {

    awInputs.forEach((awInput) => {

      this.formGroup.addControl(awInput.controlDefinition.id, awInput.formControl);

      // We could enable subscribing to an event that fires when any FormControl inside this form gets updated.
      // this.formGroup.controls[awInputs.controlDefinition.id].valueChanges.subscribe((value) => {});

    });

  }

  public onFormSubmit() {
    this.onSubmit.emit({});
  }

}



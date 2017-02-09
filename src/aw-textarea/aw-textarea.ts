import {Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


export interface AwTextAreaControlDefinition {
  id: string;
  name: string;
  type?: string;
  defaultValue?: string;
  validators: any[];
  hint?: string;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
}

export interface AwTextAreaChangedEvent {
  // getValue: any;
  value: any;
  text: any;
  asDouble: number;
  asInteger: number;
  errors: any;
  formControl: FormControl;
  formGroup: FormGroup;
}

@Component({
  selector: 'aw-textarea',
  templateUrl: 'aw-textarea.html'
})
export class AwTextArea {

  @Input('controlDefinition')
  public controlDefinition: AwTextAreaControlDefinition;

  @Output('updated')
  public formUpdated: EventEmitter<any> = new EventEmitter();

  @Input('value')
  public value: any;

  @ViewChild('input')
  public myInput: ElementRef;

  public formControl: FormControl;
  public inputName: string;
  public inputType: string;
  public formGroup: FormGroup;

  constructor() {

  }

  public ngOnInit() {

    // Validate and assign default properties
    this.controlDefinition = this.prepareTextInputFieldDefinition(this.controlDefinition);

    // Create the FormControl
    this.formControl = this.buildFromControl(this.controlDefinition);

    // If a default value is provided passit to the formControl
    if (this.value) {
      this.formControl.setValue(this.value);
    }

    /** Handle Events */

    // When the input value changes
    this.formControl.valueChanges.subscribe((event) => {
      this.inputValueChangedEvent(event);
    });

  }

  public focus() {
    this.myInput.nativeElement.focus();
  }


  /**
   * Emits an event that returns an AwTextInputChangedEvent object
   * @param value - event data from the FormControl
   */
  private inputValueChangedEvent(value: any): void {

    this.formUpdated.emit({
      value: value,
      text: value || '',
      asDouble: isNaN(parseInt(value)) ? -1 : (parseInt(value)).toFixed(2),
      asInteger: parseInt(value) || -1,
      errors: this.formControl.errors,
      formInput: this.formControl
    });

  }

  /**
   * Creates a FormControl from an AwTextInputControlDefinition
   * @param { AwTextInputControlDefinition } inputFieldDefinition - the definition of the FormControl to be created
   * @returns {FormControl}
   */
  private buildFromControl(inputFieldDefinition: AwTextAreaControlDefinition): FormControl {

    return new FormControl(
      inputFieldDefinition.defaultValue || '',
      inputFieldDefinition.validators
    );
  }

  private prepareTextInputFieldDefinition(textInputFieldDefinition: AwTextAreaControlDefinition): AwTextAreaControlDefinition {

    // If no input type is specified, default to text
    textInputFieldDefinition.type = textInputFieldDefinition.type || 'text';

    return textInputFieldDefinition;

  }

}


import {Component, Input, Output, EventEmitter, ViewChild, SimpleChanges} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import * as moment from 'moment';
import * as  _ from 'lodash';
import {TranslateService} from 'ng2-translate';

export interface AwDateTimeControlDefinition {
  id?: string;
  name?: string;
  defaultValue?: string;
  validators?: any[];
  hint?: string;
  prefix?: string;
  suffix?: string;
  displayFormat?: string;
  initialFormat?: string;
  maxDateRange?: string;
  pickerFormat?: string;
  allowNull?: boolean;
}

export interface AwDateTimeChangedEvent {
  UTCNumber: number;
  formControl: FormControl;
  onChange: any;
}

@Component({
  selector: 'aw-date-time',
  templateUrl: 'aw-date-time.html'
})
export class AwDateTime {

  @Input('controlDefinition')
  public controlDefinition: AwDateTimeControlDefinition;

  @Input('minDateRange')
  public minDateRange: string;

  @Output('updated')
  public formUpdated: EventEmitter<any> = new EventEmitter();

  @Input('value')
  public value: any;

  public formControl: FormControl;
  public formGroup: FormGroup;

  public displayValue: string;
  public selectedDate: string;
  public maxDateRange: string;

  @ViewChild('datePicker') public datePicker;

  constructor(private translateService: TranslateService) {

  }

  public ngOnInit() {
    // Create the FormControl
    this.formControl = this.buildFromControl(this.controlDefinition);

    let currentDateTime: Date = null;
    if (this.controlDefinition.allowNull) {
      if (this.value) {
        currentDateTime = new Date(this.value);
      }
    } else {
      currentDateTime = this.value ? new Date(this.value) : new Date();
    }

    if (currentDateTime !== null) {
      this.selectedDate = currentDateTime.toISOString();
    } else {
      // Default the selected date (of the picker to today). This will
      // only apply to the picker when it is launched and is not set at the
      // current value fo the field.
      this.selectedDate = new Date().toISOString();
    }

    // If a default value is provided pass  it to the formControl
    this.formControl.setValue(currentDateTime);

    this._updateDisplayValue();

    if (!this.minDateRange) {
      // default to a "safe" value
      this.minDateRange = moment().toISOString();
    }

    if (this.controlDefinition.maxDateRange) {
      this.maxDateRange = this.controlDefinition.maxDateRange;
    } else {
      // Extend the max out to 2 years from now by default (otherwise its to the end of the year)
      this.maxDateRange = moment().add(2, 'year').toISOString();
    }

    /** Handle Events */
    // When the input value changes
    this.formControl.valueChanges.subscribe((event) => {
      this.dateTimeChangedEvent(event);
    });

    // send an initial update
    if (currentDateTime) {
      this.dateTimeChangedEvent(currentDateTime.getTime());
    }
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['minDateRange']) {
      if (!_.isNil(this.selectedDate)) {
        // update the selected date if necessary
        let newValue = Math.max(moment(this.selectedDate).valueOf(), moment(this.minDateRange).valueOf());
        this.selectedDate = moment(newValue).toISOString();
        this.formControl.setValue(new Date(newValue));
        this._updateDisplayValue();
      }
    }
  }

  public clearDateField() {
    this.formControl.setValue(null);
    this._updateDisplayValue();
  }

  /**
   * Event handler for the event fired by the <ion-datetime> component
   */
  public onDateChange() {
    console.warn('Date changed: ', this.selectedDate);
    let value = this.selectedDate;
    this.formControl.setValue(moment(value).toDate());
    this._updateDisplayValue();
  }

  private _updateDisplayValue() {
    let value = this.formControl.value;

    if (value !== null) {
      value = moment(value).calendar(null, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'll',
        lastDay: '[Yesterday]',
        lastWeek: 'll',
        sameElse: 'll'
      });
    } else {
      value = this.translateService.instant('widget.date_picker.select_date');
    }

    this.displayValue = value;
  }

  /**
   * Emits an event that returns an AwDateTimeChangedEvent object
   * @param value - event data from the FormControl
   */
  private dateTimeChangedEvent(value: any): void {

    console.warn('form value updated: ', value);
    let utcNumber = 0;
    let dateValue = null;

    if (value > 0) {
      dateValue =  moment(value).toDate();
      utcNumber = dateValue.getTime();
    }

    this.formUpdated.emit({
      value: dateValue,
      UTCNumber: utcNumber,
      asDate: dateValue,
      formInput: this.formControl
    });
  }

  /**
   * Creates a FormControl from an AwDateTimeControlDefinition
   * @param { AwDateTimeControlDefinition } dateTimeFieldDefinition - the definition of the FormControl to be created
   * @returns {FormControl}
   */
  private buildFromControl(dateTimeFieldDefinition: AwDateTimeControlDefinition): FormControl {

    return new FormControl(
      dateTimeFieldDefinition.defaultValue || '',
      dateTimeFieldDefinition.validators
    );
  }
}


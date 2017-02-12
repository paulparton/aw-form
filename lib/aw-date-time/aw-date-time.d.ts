import { EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TranslateService } from 'ng2-translate';
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
export declare class AwDateTime {
    private translateService;
    controlDefinition: AwDateTimeControlDefinition;
    minDateRange: string;
    formUpdated: EventEmitter<any>;
    value: any;
    formControl: FormControl;
    formGroup: FormGroup;
    displayValue: string;
    selectedDate: string;
    maxDateRange: string;
    datePicker: any;
    constructor(translateService: TranslateService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    clearDateField(): void;
    onDateChange(): void;
    private _updateDisplayValue();
    private dateTimeChangedEvent(value);
    private buildFromControl(dateTimeFieldDefinition);
}

import { EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
export interface AwTextInputControlDefinition {
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
export interface AwTextInputChangedEvent {
    value: any;
    text: any;
    asDouble: number;
    asInteger: number;
    errors: any;
    formControl: FormControl;
    formGroup: FormGroup;
}
export declare class AwInputText {
    controlDefinition: AwTextInputControlDefinition;
    formUpdated: EventEmitter<any>;
    value: any;
    myInput: ElementRef;
    formControl: FormControl;
    inputName: string;
    inputType: string;
    formGroup: FormGroup;
    constructor();
    ngOnInit(): void;
    focus(): void;
    private inputValueChangedEvent(value);
    private buildFromControl(inputFieldDefinition);
    private prepareTextInputFieldDefinition(textInputFieldDefinition);
    isRequired(): boolean;
}

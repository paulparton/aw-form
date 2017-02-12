import { EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TranslateService } from 'ng2-translate';
export interface AwSelectControlDefinition {
    name: string;
    listItems: string;
    id?: string;
    defaultValue?: string;
    validators?: any[];
    hint?: string;
    prefix?: string;
    suffix?: string;
    optionList?: AwSelectOption[];
    placeholder?: string;
}
export interface AwSelectOptionChangedEvent {
    selectedOption: string;
    formControl: FormControl;
    formGroup: FormGroup;
    onChange: any;
}
export interface AwSelectOption {
    id: string;
    value: any;
    display: string;
}
export declare class AwSelect {
    private translateService;
    controlDefinition: AwSelectControlDefinition;
    options: AwSelectOption[];
    value: any;
    formUpdated: EventEmitter<any>;
    formControl: FormControl;
    formGroup: FormGroup;
    selected: string;
    selectOptions: any;
    selectCtrl: any;
    constructor(translateService: TranslateService);
    ngOnInit(): void;
    handleClick(): void;
    onSelectionChanged(options: any): void;
    private onOptionsSelected(value);
    private buildFromControl(awSelectControlDefinition);
}

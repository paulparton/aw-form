import { EventEmitter, QueryList } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AwInputText } from './aw-input/aw-input';
export declare class AwForm {
    formGroup: FormGroup;
    onSubmit: EventEmitter<any>;
    awInputComponents: QueryList<AwInputText>;
    private initialised;
    constructor();
    ngAfterContentChecked(): void;
    private addAwInputsToForm(awInputs);
    onFormSubmit(): void;
}

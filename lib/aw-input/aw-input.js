"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let AwInputText = class AwInputText {
    constructor() {
        this.formUpdated = new core_1.EventEmitter();
    }
    ngOnInit() {
        this.controlDefinition = this.prepareTextInputFieldDefinition(this.controlDefinition);
        this.formControl = this.buildFromControl(this.controlDefinition);
        if (this.value) {
            this.formControl.setValue(this.value);
        }
        this.formControl.valueChanges.subscribe((event) => {
            this.inputValueChangedEvent(event);
        });
    }
    focus() {
        this.myInput.nativeElement.focus();
    }
    inputValueChangedEvent(value) {
        this.formUpdated.emit({
            value: value,
            text: value || '',
            asDouble: isNaN(parseInt(value)) ? -1 : (parseInt(value)).toFixed(2),
            asInteger: parseInt(value) || -1,
            errors: this.formControl.errors,
            formInput: this.formControl
        });
    }
    buildFromControl(inputFieldDefinition) {
        return new forms_1.FormControl(inputFieldDefinition.defaultValue || '', inputFieldDefinition.validators);
    }
    prepareTextInputFieldDefinition(textInputFieldDefinition) {
        textInputFieldDefinition.type = textInputFieldDefinition.type || 'text';
        return textInputFieldDefinition;
    }
    isRequired() {
        let required = false;
        if (this.controlDefinition.validators) {
            this.controlDefinition.validators.some(validator => {
                if (validator === forms_1.Validators.required) {
                    required = true;
                    return true;
                }
                return false;
            });
        }
        return required;
    }
};
__decorate([
    core_1.Input('controlDefinition'),
    __metadata("design:type", Object)
], AwInputText.prototype, "controlDefinition", void 0);
__decorate([
    core_1.Output('updated'),
    __metadata("design:type", core_1.EventEmitter)
], AwInputText.prototype, "formUpdated", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], AwInputText.prototype, "value", void 0);
__decorate([
    core_1.ViewChild('input'),
    __metadata("design:type", core_1.ElementRef)
], AwInputText.prototype, "myInput", void 0);
AwInputText = __decorate([
    core_1.Component({
        selector: 'aw-input-text',
        templateUrl: 'aw-input.html'
    }),
    __metadata("design:paramtypes", [])
], AwInputText);
exports.AwInputText = AwInputText;
//# sourceMappingURL=aw-input.js.map
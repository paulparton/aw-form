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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AwInputText = (function () {
    function AwInputText() {
        this.formUpdated = new core_1.EventEmitter();
    }
    AwInputText.prototype.ngOnInit = function () {
        var _this = this;
        this.controlDefinition = this.prepareTextInputFieldDefinition(this.controlDefinition);
        this.formControl = this.buildFromControl(this.controlDefinition);
        if (this.value) {
            this.formControl.setValue(this.value);
        }
        this.formControl.valueChanges.subscribe(function (event) {
            _this.inputValueChangedEvent(event);
        });
    };
    AwInputText.prototype.focus = function () {
        this.myInput.nativeElement.focus();
    };
    AwInputText.prototype.inputValueChangedEvent = function (value) {
        this.formUpdated.emit({
            value: value,
            text: value || '',
            asDouble: isNaN(parseInt(value)) ? -1 : (parseInt(value)).toFixed(2),
            asInteger: parseInt(value) || -1,
            errors: this.formControl.errors,
            formInput: this.formControl
        });
    };
    AwInputText.prototype.buildFromControl = function (inputFieldDefinition) {
        return new forms_1.FormControl(inputFieldDefinition.defaultValue || '', inputFieldDefinition.validators);
    };
    AwInputText.prototype.prepareTextInputFieldDefinition = function (textInputFieldDefinition) {
        textInputFieldDefinition.type = textInputFieldDefinition.type || 'text';
        return textInputFieldDefinition;
    };
    AwInputText.prototype.isRequired = function () {
        var required = false;
        if (this.controlDefinition.validators) {
            this.controlDefinition.validators.some(function (validator) {
                if (validator === forms_1.Validators.required) {
                    required = true;
                    return true;
                }
                return false;
            });
        }
        return required;
    };
    return AwInputText;
}());
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
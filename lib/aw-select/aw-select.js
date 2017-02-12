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
const ng2_translate_1 = require("ng2-translate");
let AwSelect = class AwSelect {
    constructor(translateService) {
        this.translateService = translateService;
        this.formUpdated = new core_1.EventEmitter();
    }
    ngOnInit() {
        this.options = this.controlDefinition.optionList;
        if (this.value) {
            this.selected = this.value;
        }
        else {
            this.selected = this.controlDefinition.defaultValue;
        }
        this.selectOptions = {
            title: this.translateService.instant(this.controlDefinition.name)
        };
        this.formControl = this.buildFromControl(this.controlDefinition);
        if (this.value) {
            this.formControl.setValue(this.value);
        }
    }
    handleClick() {
        if (this.controlDefinition.listItems.length > 1)
            this.selectCtrl.open();
    }
    onSelectionChanged(options) {
        console.warn('Selection changed: ', options);
        this.formControl.setValue(options);
    }
    onOptionsSelected(value) {
        console.log('form value updatedd: ', value);
        this.formUpdated.emit({
            selectedOption: this.selected,
            formInput: this.formControl
        });
    }
    buildFromControl(awSelectControlDefinition) {
        return new forms_1.FormControl(awSelectControlDefinition.defaultValue || '', awSelectControlDefinition.validators);
    }
};
__decorate([
    core_1.Input('controlDefinition'),
    __metadata("design:type", Object)
], AwSelect.prototype, "controlDefinition", void 0);
__decorate([
    core_1.Input('options'),
    __metadata("design:type", Array)
], AwSelect.prototype, "options", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], AwSelect.prototype, "value", void 0);
__decorate([
    core_1.Output('updated'),
    __metadata("design:type", core_1.EventEmitter)
], AwSelect.prototype, "formUpdated", void 0);
__decorate([
    core_1.ViewChild('selectCtrl'),
    __metadata("design:type", Object)
], AwSelect.prototype, "selectCtrl", void 0);
AwSelect = __decorate([
    core_1.Component({
        selector: 'aw-select',
        templateUrl: 'aw-select.html'
    }),
    __metadata("design:paramtypes", [ng2_translate_1.TranslateService])
], AwSelect);
exports.AwSelect = AwSelect;
//# sourceMappingURL=aw-select.js.map
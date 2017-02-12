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
const aw_input_1 = require("./aw-input/aw-input");
let AwForm = class AwForm {
    constructor() {
        this.onSubmit = new core_1.EventEmitter();
    }
    ngAfterContentChecked() {
        if (!this.initialised) {
            this.initialised = true;
            this.addAwInputsToForm(this.awInputComponents);
        }
    }
    addAwInputsToForm(awInputs) {
        awInputs.forEach((awInput) => {
            this.formGroup.addControl(awInput.controlDefinition.id, awInput.formControl);
        });
    }
    onFormSubmit() {
        this.onSubmit.emit({});
    }
};
__decorate([
    core_1.Input('formGroup'),
    __metadata("design:type", forms_1.FormGroup)
], AwForm.prototype, "formGroup", void 0);
__decorate([
    core_1.Output('awSubmit'),
    __metadata("design:type", core_1.EventEmitter)
], AwForm.prototype, "onSubmit", void 0);
__decorate([
    core_1.ContentChildren(aw_input_1.AwInputText, { descendants: true }),
    __metadata("design:type", core_1.QueryList)
], AwForm.prototype, "awInputComponents", void 0);
AwForm = __decorate([
    core_1.Component({
        selector: 'aw-form',
        templateUrl: 'aw-form.html'
    }),
    __metadata("design:paramtypes", [])
], AwForm);
exports.AwForm = AwForm;
//# sourceMappingURL=aw-form.js.map
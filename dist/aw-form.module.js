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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var aw_form_1 = require("./aw-form");
var aw_input_1 = require("./aw-input/aw-input");
function coreDirectives() {
    return [
        aw_form_1.AwForm, aw_input_1.AwInputText
    ];
}
var AwFormModule = AwFormModule_1 = (function () {
    function AwFormModule() {
    }
    AwFormModule.forRoot = function () {
        return {
            ngModule: AwFormModule_1,
            providers: [],
        };
    };
    return AwFormModule;
}());
AwFormModule = AwFormModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [coreDirectives()],
        exports: [coreDirectives()],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], AwFormModule);
exports.AwFormModule = AwFormModule;
exports.AwFormModule = AwFormModule;
var aw_form_2 = require("./aw-form");
exports.AwForm = aw_form_2.AwForm;
var aw_input_2 = require("./aw-input/aw-input");
exports.AwInputText = aw_input_2.AwInputText;
var AwFormModule_1;
//# sourceMappingURL=aw-form.module.js.map
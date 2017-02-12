"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const ionic_angular_1 = require("ionic-angular");
const ng2_translate_1 = require("ng2-translate/ng2-translate");
const aw_form_1 = require("./aw-form");
const aw_input_1 = require("./aw-input");
const aw_select_1 = require("./aw-select");
var aw_form_2 = require("./aw-form");
exports.AwForm = aw_form_2.AwForm;
__export(require("./aw-input"));
var aw_select_2 = require("./aw-select");
exports.AwSelect = aw_select_2.AwSelect;
var aw_date_time_1 = require("./aw-date-time");
exports.AwDateTime = aw_date_time_1.AwDateTime;
var aw_readonly_text_1 = require("./aw-readonly-text");
exports.AwReadOnlyText = aw_readonly_text_1.AwReadOnlyText;
var aw_textarea_1 = require("./aw-textarea");
exports.AwTextArea = aw_textarea_1.AwTextArea;
function coreDirectives() {
    return [
        aw_form_1.AwForm, aw_input_1.AwInputText, aw_select_1.AwSelect
    ];
}
exports.coreDirectives = coreDirectives;
let AwFormIonicModule = AwFormIonicModule_1 = class AwFormIonicModule {
    static forRoot() {
        return {
            ngModule: AwFormIonicModule_1,
            providers: [],
        };
    }
};
AwFormIonicModule = AwFormIonicModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng2_translate_1.TranslateModule, ionic_angular_1.IonicModule],
        declarations: [coreDirectives()],
        exports: [coreDirectives()],
        providers: []
    })
], AwFormIonicModule);
exports.AwFormIonicModule = AwFormIonicModule;
var AwFormIonicModule_1;
//# sourceMappingURL=aw-form-ionic.module.js.map
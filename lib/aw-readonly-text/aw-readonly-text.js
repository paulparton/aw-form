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
let AwReadOnlyText = class AwReadOnlyText {
};
__decorate([
    core_1.Input('id'),
    __metadata("design:type", String)
], AwReadOnlyText.prototype, "id", void 0);
__decorate([
    core_1.Input('label'),
    __metadata("design:type", String)
], AwReadOnlyText.prototype, "label", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], AwReadOnlyText.prototype, "value", void 0);
AwReadOnlyText = __decorate([
    core_1.Component({
        selector: 'aw-readonly-text',
        template: `
    <div class="form-group">
      <label [attr.for]="id" class="control-label">
        {{ label | translate}}
      </label>
      <div class="aw-normal-text" id="{{ id }}">
        {{ value }}
      </div>
    </div>
  `
    })
], AwReadOnlyText);
exports.AwReadOnlyText = AwReadOnlyText;
//# sourceMappingURL=aw-readonly-text.js.map
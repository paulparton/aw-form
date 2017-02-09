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
var moment = require("moment");
var _ = require("lodash");
var ng2_translate_1 = require("ng2-translate");
var AwDateTime = (function () {
    function AwDateTime(translateService) {
        this.translateService = translateService;
        this.formUpdated = new core_1.EventEmitter();
    }
    AwDateTime.prototype.ngOnInit = function () {
        var _this = this;
        this.formControl = this.buildFromControl(this.controlDefinition);
        var currentDateTime = null;
        if (this.controlDefinition.allowNull) {
            if (this.value) {
                currentDateTime = new Date(this.value);
            }
        }
        else {
            currentDateTime = this.value ? new Date(this.value) : new Date();
        }
        if (currentDateTime !== null) {
            this.selectedDate = currentDateTime.toISOString();
        }
        else {
            this.selectedDate = new Date().toISOString();
        }
        this.formControl.setValue(currentDateTime);
        this._updateDisplayValue();
        if (!this.minDateRange) {
            this.minDateRange = moment().toISOString();
        }
        if (this.controlDefinition.maxDateRange) {
            this.maxDateRange = this.controlDefinition.maxDateRange;
        }
        else {
            this.maxDateRange = moment().add(2, 'year').toISOString();
        }
        this.formControl.valueChanges.subscribe(function (event) {
            _this.dateTimeChangedEvent(event);
        });
        if (currentDateTime) {
            this.dateTimeChangedEvent(currentDateTime.getTime());
        }
    };
    AwDateTime.prototype.ngOnChanges = function (changes) {
        if (changes['minDateRange']) {
            if (!_.isNil(this.selectedDate)) {
                var newValue = Math.max(moment(this.selectedDate).valueOf(), moment(this.minDateRange).valueOf());
                this.selectedDate = moment(newValue).toISOString();
                this.formControl.setValue(new Date(newValue));
                this._updateDisplayValue();
            }
        }
    };
    AwDateTime.prototype.clearDateField = function () {
        this.formControl.setValue(null);
        this._updateDisplayValue();
    };
    AwDateTime.prototype.onDateChange = function () {
        console.warn('Date changed: ', this.selectedDate);
        var value = this.selectedDate;
        this.formControl.setValue(moment(value).toDate());
        this._updateDisplayValue();
    };
    AwDateTime.prototype._updateDisplayValue = function () {
        var value = this.formControl.value;
        if (value !== null) {
            value = moment(value).calendar(null, {
                sameDay: '[Today]',
                nextDay: '[Tomorrow]',
                nextWeek: 'll',
                lastDay: '[Yesterday]',
                lastWeek: 'll',
                sameElse: 'll'
            });
        }
        else {
            value = this.translateService.instant('widget.date_picker.select_date');
        }
        this.displayValue = value;
    };
    AwDateTime.prototype.dateTimeChangedEvent = function (value) {
        console.warn('form value updated: ', value);
        var utcNumber = 0;
        var dateValue = null;
        if (value > 0) {
            dateValue = moment(value).toDate();
            utcNumber = dateValue.getTime();
        }
        this.formUpdated.emit({
            value: dateValue,
            UTCNumber: utcNumber,
            asDate: dateValue,
            formInput: this.formControl
        });
    };
    AwDateTime.prototype.buildFromControl = function (dateTimeFieldDefinition) {
        return new forms_1.FormControl(dateTimeFieldDefinition.defaultValue || '', dateTimeFieldDefinition.validators);
    };
    return AwDateTime;
}());
__decorate([
    core_1.Input('controlDefinition'),
    __metadata("design:type", Object)
], AwDateTime.prototype, "controlDefinition", void 0);
__decorate([
    core_1.Input('minDateRange'),
    __metadata("design:type", String)
], AwDateTime.prototype, "minDateRange", void 0);
__decorate([
    core_1.Output('updated'),
    __metadata("design:type", core_1.EventEmitter)
], AwDateTime.prototype, "formUpdated", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], AwDateTime.prototype, "value", void 0);
__decorate([
    core_1.ViewChild('datePicker'),
    __metadata("design:type", Object)
], AwDateTime.prototype, "datePicker", void 0);
AwDateTime = __decorate([
    core_1.Component({
        selector: 'aw-date-time',
        templateUrl: 'aw-date-time.html'
    }),
    __metadata("design:paramtypes", [ng2_translate_1.TranslateService])
], AwDateTime);
exports.AwDateTime = AwDateTime;
//# sourceMappingURL=aw-date-time.js.map
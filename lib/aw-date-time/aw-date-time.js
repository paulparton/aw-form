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
const moment = require("moment");
const _ = require("lodash");
const ng2_translate_1 = require("ng2-translate");
let AwDateTime = class AwDateTime {
    constructor(translateService) {
        this.translateService = translateService;
        this.formUpdated = new core_1.EventEmitter();
    }
    ngOnInit() {
        this.formControl = this.buildFromControl(this.controlDefinition);
        let currentDateTime = null;
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
        this.formControl.valueChanges.subscribe((event) => {
            this.dateTimeChangedEvent(event);
        });
        if (currentDateTime) {
            this.dateTimeChangedEvent(currentDateTime.getTime());
        }
    }
    ngOnChanges(changes) {
        if (changes['minDateRange']) {
            if (!_.isNil(this.selectedDate)) {
                let newValue = Math.max(moment(this.selectedDate).valueOf(), moment(this.minDateRange).valueOf());
                this.selectedDate = moment(newValue).toISOString();
                this.formControl.setValue(new Date(newValue));
                this._updateDisplayValue();
            }
        }
    }
    clearDateField() {
        this.formControl.setValue(null);
        this._updateDisplayValue();
    }
    onDateChange() {
        console.warn('Date changed: ', this.selectedDate);
        let value = this.selectedDate;
        this.formControl.setValue(moment(value).toDate());
        this._updateDisplayValue();
    }
    _updateDisplayValue() {
        let value = this.formControl.value;
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
    }
    dateTimeChangedEvent(value) {
        console.warn('form value updated: ', value);
        let utcNumber = 0;
        let dateValue = null;
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
    }
    buildFromControl(dateTimeFieldDefinition) {
        return new forms_1.FormControl(dateTimeFieldDefinition.defaultValue || '', dateTimeFieldDefinition.validators);
    }
};
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
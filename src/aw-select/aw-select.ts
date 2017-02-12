// import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
// import {FormGroup, FormControl} from '@angular/forms';
// // import {Select} from 'ionic-angular';
// import {ActionSheetController} from 'ionic-angular';
// import * as _ from 'lodash';
// import {TranslateService} from 'ng2-translate';
//
// export interface AwSelectControlDefinition {
//   name: string;
//   listItems: string;
//   id?: string;
//   defaultValue?: string;
//   validators?: any[];
//   hint?: string;
//   prefix?: string;
//   suffix?: string;
//   optionList?: AwSelectOption[];
//   placeholder?: string;
//
// }
//
// export interface  AwSelectOptionChangedEvent {
//   selectedOption: string;
//   formControl: FormControl;
//   formGroup: FormGroup;
//   onChange: any;
// }
//
// export interface  AwSelectOption {
//   id: string;
//   value: any;
//   display: string;
// }
//
// @Component({
//   selector: 'aw-select',
//   templateUrl: 'aw-select.html'
// })
//
// export class AwSelect {
//
//   @Input('controlDefinition')
//   public controlDefinition: AwSelectControlDefinition;
//
//   @Input('options')
//   public options: AwSelectOption[];
//
//   @Input('value')
//   public value: any;
//
//   @Output('updated')
//   public formUpdated: EventEmitter<any> = new EventEmitter();
//
//   public formControl: FormControl;
//   public formGroup: FormGroup;
//
//   public selected: string;
//   public selectOptions;
//
//   @ViewChild('selectCtrl') public selectCtrl: Select;
//
//   constructor(private translateService: TranslateService) {
//     // Do nothing
//   }
//
//   public ngOnInit() {
//     if (_.isUndefined(this.options)) {
//       this.options = this.controlDefinition.optionList;
//     }
//
//     if (this.value) {
//       this.selected = this.value;
//     } else {
//       this.selected = this.controlDefinition.defaultValue;
//     }
//
//     this.selectOptions = {
//       title: this.translateService.instant(this.controlDefinition.name)
//     };
//
//     this.formControl = this.buildFromControl(this.controlDefinition);
//
//     // If a default value is provided passit to the formControl
//     if (this.value) {
//       this.formControl.setValue(this.value);
//     }
//   }
//
//   public handleClick(): void {
//     if (this.controlDefinition.listItems.length > 1)
//       this.selectCtrl.open();
//   }
//
//   /*
//    *  Event handler for the evnet fired by the <ion-select> component
//    */
//   public onSelectionChanged(options) {
//     console.warn('Selection changed: ', options);
//     this.formControl.setValue(options);
//   }
//
//   /**
//    * Emits an event that returns an AwDateTimeChangedEvent object
//    * @param value - event data from the FormControl
//    */
//   private onOptionsSelected(value: any): void {
//
//     console.log('form value updatedd: ', value);
//
//     this.formUpdated.emit({
//       selectedOption: this.selected,
//       formInput: this.formControl
//     });
//
//   }
//
//   /**
//    * Creates a FormControl from an AwSelectControlDefinition
//    * @param { AwSelectControlDefinition } awSelectControlDefinition - the definition of the FormControl to be created
//    * @returns {FormControl}
//    */
//   private buildFromControl(awSelectControlDefinition: AwSelectControlDefinition): FormControl {
//
//     return new FormControl(
//       awSelectControlDefinition.defaultValue || '',
//       awSelectControlDefinition.validators
//     );
//
//   }
//
// }
//

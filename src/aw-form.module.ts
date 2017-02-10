import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AwForm } from './aw-form';
import { AwInputText, AwTextInputChangedEvent, AwTextInputControlDefinition } from './aw-input/aw-input';
import {
  TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader
}from 'ng2-translate/ng2-translate';
// import { AwDateTime, AwDateTimeChangedEvent, AwDateTimeControlDefinition } from './aw-date-time/aw-date-time';
// import { AwReadOnlyText, AwReadOnlyTextControlDefinition } from './aw-readonly-text/aw-readonly-text';
// import { AwSelect, AwSelectControlDefinition, AwSelectOption, AwSelectOptionChangedEvent } from './aw-select/aw-select';
// import { AwTextArea, AwTextAreaChangedEvent, AwTextAreaControlDefinition } from './aw-textarea/aw-textarea';


function coreDirectives() {
  return [
    AwForm, AwInputText
    // , AwDateTime, AwReadOnlyText, AwSelect, AwTextArea,
  ];
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
  ],
  declarations: [coreDirectives()],
  exports: [coreDirectives()],
  providers: [TranslateService]
})
export class AwFormModule {
  constructor(){
  }
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AwFormModule,
      providers: [TranslateService],
    };
  }
}

exports.AwFormModule = AwFormModule;

export { AwForm } from './aw-form';
export { AwInputText, AwTextInputChangedEvent, AwTextInputControlDefinition } from './aw-input/aw-input';
// export { AwDateTime, AwDateTimeChangedEvent, AwDateTimeControlDefinition } from './aw-date-time/aw-date-time';
// export { AwReadOnlyText, AwReadOnlyTextControlDefinition } from './aw-readonly-text/aw-readonly-text';
// export { AwSelect, AwSelectControlDefinition, AwSelectOption, AwSelectOptionChangedEvent } from './aw-select/aw-select';
// export { AwTextArea, AwTextAreaChangedEvent, AwTextAreaControlDefinition } from './aw-textarea/aw-textarea';

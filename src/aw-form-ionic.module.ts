import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicModule, Icon } from 'ionic-angular';
import {
  TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader
} from 'ng2-translate/ng2-translate';

import { AwForm } from './aw-form';
import { AwInputText, AwTextInputChangedEvent, AwTextInputControlDefinition } from './aw-input/aw-input';
import { AwSelect, AwSelectControlDefinition, AwSelectOption, AwSelectOptionChangedEvent } from './aw-select/aw-select';

import { AwDateTime, AwDateTimeChangedEvent, AwDateTimeControlDefinition } from './aw-date-time/aw-date-time';
import { AwReadOnlyText, AwReadOnlyTextControlDefinition } from './aw-readonly-text/aw-readonly-text';
import { AwTextArea, AwTextAreaChangedEvent, AwTextAreaControlDefinition } from './aw-textarea/aw-textarea';


export { AwForm } from './aw-form';
export { AwInputText, AwTextInputChangedEvent, AwTextInputControlDefinition } from './aw-input/aw-input';
export { AwSelect, AwSelectControlDefinition, AwSelectOption, AwSelectOptionChangedEvent } from './aw-select/aw-select';

export { AwDateTime, AwDateTimeChangedEvent, AwDateTimeControlDefinition } from './aw-date-time/aw-date-time';
export { AwReadOnlyText, AwReadOnlyTextControlDefinition } from './aw-readonly-text/aw-readonly-text';
export { AwTextArea, AwTextAreaChangedEvent, AwTextAreaControlDefinition } from './aw-textarea/aw-textarea';

export function coreDirectives() {
  return [
    AwForm, AwInputText, AwSelect
  ];
}

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, IonicModule],
  declarations: [coreDirectives()],
  exports: [coreDirectives()],
  providers: []
})
export class AwFormIonicModule {

  /**
   * Please use this method when you register the module at the root level.
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AwFormIonicModule,
      providers: [],
    };
  }

}


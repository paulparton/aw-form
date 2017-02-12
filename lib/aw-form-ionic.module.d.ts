import { ModuleWithProviders } from '@angular/core';
import { AwForm } from './aw-form';
import { AwInputText } from './aw-input';
import { AwSelect } from './aw-select';
export { AwForm } from './aw-form';
export * from './aw-input';
export { AwSelect, AwSelectControlDefinition, AwSelectOption, AwSelectOptionChangedEvent } from './aw-select';
export { AwDateTime, AwDateTimeChangedEvent, AwDateTimeControlDefinition } from './aw-date-time';
export { AwReadOnlyText, AwReadOnlyTextControlDefinition } from './aw-readonly-text';
export { AwTextArea, AwTextAreaChangedEvent, AwTextAreaControlDefinition } from './aw-textarea';
export declare function coreDirectives(): (typeof AwInputText | typeof AwForm | typeof AwSelect)[];
export declare class AwFormIonicModule {
    static forRoot(): ModuleWithProviders;
}

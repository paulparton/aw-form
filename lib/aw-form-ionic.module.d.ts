import { ModuleWithProviders } from '@angular/core';
import { AwForm } from './aw-form';
import { AwInputText } from './aw-input/aw-input';
import { AwSelect } from './aw-select/aw-select';
export declare function coreDirectives(): (typeof AwInputText | typeof AwForm | typeof AwSelect)[];
export declare class AwFormIonicModule {
    static forRoot(): ModuleWithProviders;
}
export { AwForm } from './aw-form';
export { AwInputText, AwTextInputChangedEvent, AwTextInputControlDefinition } from './aw-input/aw-input';
export { AwSelect, AwSelectControlDefinition, AwSelectOption, AwSelectOptionChangedEvent } from './aw-select/aw-select';

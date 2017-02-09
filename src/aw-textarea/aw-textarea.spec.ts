// import {ComponentFixture, async} from '@angular/core/testing';
// import {AwTextAreaControlDefinition, AwTextArea} from './aw-textarea';
// import {TestUtils, ITestModuleOption} from '../../../test';
// import {FormControl} from '@angular/forms';
//
// describe('The aw-text-input component', () => {
//
//   let fixture: ComponentFixture<AwTextArea> = null;
//   let instance: any = null;
//   let mockControlDefinition: AwTextAreaControlDefinition;
//
//   let compilerOptions: ITestModuleOption = {
//     components: [AwTextArea]
//   };
//
//   beforeEach(async(() => TestUtils.setupBaseComponentTest(compilerOptions).then(compiled => {
//
//     fixture = compiled.fixture;
//     instance = compiled.instance;
//
//   })));
//
//   it('Should create a FromControl from an AwTextInputControlDefinition', () => {
//
//     mockControlDefinition = {
//       id: 'mockInputId',
//       name: 'mock input',
//       type: 'password',
//       validators: [],
//       value: 'test'
//     } as AwTextAreaControlDefinition;
//
//     let comp = fixture.componentInstance;
//
//     comp.controlDefinition = mockControlDefinition;
//     fixture.detectChanges();
//
//     expect(fixture.componentInstance.formControl instanceof FormControl).toBe(true);
//
//   });
//
//   it('Should fire an event when the value changes', () => {
//
//     let updatedValue = 'updated value';
//     let comp = fixture.componentInstance;
//
//     mockControlDefinition = {
//       id: 'mockInputId',
//       name: 'mock input',
//       type: 'password',
//       validators: [],
//       value: 'test'
//     } as AwTextAreaControlDefinition;
//
//     comp.controlDefinition = mockControlDefinition;
//
//     comp.formUpdated.subscribe((event) => {
//       expect(event.value).toBe(updatedValue);
//     });
//
//     fixture.detectChanges();
//     fixture.componentInstance.formControl.setValue(updatedValue);
//     fixture.detectChanges();
//
//
//   });
//
//   it('Should set the type to text by default', () => {
//
//     mockControlDefinition = {
//       id: 'mockInputId',
//       name: 'mock input',
//       validators: []
//     } as AwTextAreaControlDefinition;
//
//     let updated: AwTextAreaControlDefinition = instance.prepareTextInputFieldDefinition(mockControlDefinition);
//
//     expect(updated.type).toBe('text');
//
//   });
//
//   it('Should use the type passed in', () => {
//
//     mockControlDefinition = {
//       id: 'mockInputId',
//       name: 'mock input',
//       type: 'password',
//       validators: []
//     } as AwTextAreaControlDefinition;
//
//     let updated: AwTextAreaControlDefinition = instance.prepareTextInputFieldDefinition(mockControlDefinition);
//
//     expect(updated.type).toBe(mockControlDefinition.type);
//   });
// });

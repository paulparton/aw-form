// import {TestBed, ComponentFixture, async} from '@angular/core/testing';
// import {AwDateTimeControlDefinition, AwDateTime} from './aw-date-time';
// import {TestUtils, ITestModuleOption} from '../../../test';
// import {FormControl} from '@angular/forms';
//
// describe('The aw-date-time component', () => {
//
//   let fixture: ComponentFixture<AwDateTime> = null;
//   let instance: any = null;
//   let mockControlDefinition: AwDateTimeControlDefinition;
//
//   let compilerOptions: ITestModuleOption = {
//     components: [AwDateTime],
//   };
//
//   beforeEach(async(() => TestUtils.setupBaseComponentTest(compilerOptions).then(compiled => {
//
//     fixture = compiled.fixture;
//     instance = compiled.instance;
//
//   })));
//
//   it('Should create a FromControl from an AwDateTimeControlDefinition', () => {
//
//     mockControlDefinition = {
//       id: 'mockInputId',
//       name: 'mock input',
//       type: 'password',
//       validators: [],
//       value: 'test'
//     } as AwDateTimeControlDefinition;
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
//     let updatedValue = new Date();
//     let comp = fixture.componentInstance;
//
//     mockControlDefinition = {
//       id: 'mockDateInputId',
//       name: 'mock input',
//       validators: []
//     } as AwDateTimeControlDefinition;
//
//     comp.controlDefinition = mockControlDefinition;
//
//     comp.formUpdated.subscribe((event) => {
//       console.log(event);
//       expect(event.UTCNumber).toBeGreaterThanOrEqual(updatedValue.getTime());
//     });
//
//     fixture.detectChanges();
//     fixture.componentInstance.formControl.setValue(updatedValue);
//     fixture.detectChanges();
//
//
//   });
// });
//

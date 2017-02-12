"use strict";
class FormBuilderMock {
    registerControl() {
    }
    ;
    group() {
        return mockFormGroup;
    }
    ;
}
exports.FormBuilderMock = FormBuilderMock;
const mockFormGroup = {
    controls: {
        inputValue: {
            valueChanges: {
                subscribe: function () {
                }
            }
        }
    }
};
//# sourceMappingURL=mocks.js.map
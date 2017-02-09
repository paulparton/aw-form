"use strict";
var FormBuilderMock = (function () {
    function FormBuilderMock() {
    }
    FormBuilderMock.prototype.registerControl = function () {
    };
    ;
    FormBuilderMock.prototype.group = function () {
        return mockFormGroup;
    };
    ;
    return FormBuilderMock;
}());
exports.FormBuilderMock = FormBuilderMock;
var mockFormGroup = {
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
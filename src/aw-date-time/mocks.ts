export class FormBuilderMock {
  public registerControl() {
  };

  public group() {
    return mockFormGroup;
  };
}

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

# aw-form
A collection of angular 2 form input widget componenents and a containing form component.

## Input components
* aw-input-text

## Usage
    /** Component **/
    import {AwTextInputControlDefinition} from '../components/aw-form';
    import {FormGroup, Validators} from '@angular/forms';
    
    //Create the FormGroup
    public angularFormGroup = new FormGroup({});
    
    //Create the input definition
    public inputDefinition : AwTextInputControlDefinition = {
        id: 'username',
        type: 'text',
        name: 'login.username',
        validators: [Validators.required]
    };
   
    //Event handlers
    public methodToRunOnSubmit (){}
    public methodToFireWhenInputChanges();
    
    <!-- Template -->
    <aw-form [formGroup]="angularFormGroup" (awSubmit)="methodToRunOnSubmit()">
        <aw-input-text
            id="inputUniqueId"
            [controlDefinition]="awTextInputControlDefinition"
            (updated)="methodToFireWhenInputChanges($event)">
          </aw-input-text>
    </aw-form>

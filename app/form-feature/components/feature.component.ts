import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NrnValidators } from '../formly/nrn.validators';
import { onlyNumberParser } from '../formly/formly-feature.config';

@Component({
  selector: 'feature',
  template: `
    <h1>My form:</h1>
    <formly-form [model]="model" [fields]="fields" [form]="form">
    </formly-form>
    <pre>model: {{model | json}}</pre>
    <pre>form: {{form.value | json}}</pre>
    <pre>form: {{form.get('nrn').errors | json}}</pre>
  `
})
export class FeatureComponent  {
  form =  new FormGroup({});
  fields = [
    {
      key: 'nrn',
      type: 'nrn-field',
      templateOptions: {
        label: 'Nrn (only numbers)',
        placeholder: 'Not Working PlaceHolder',
        required: true
      }
    }
  ];
  model = {nrn:5555}
}

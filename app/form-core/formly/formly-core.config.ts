import { ConfigOption } from '@ngx-formly/core';
import { InputMaskFieldComponent } from './input-mask-field.component';

export const FIELD_TYPE_COMPONENTS = [
  //types
  InputMaskFieldComponent,
];

export const FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: 'input-mask-field',
      component: InputMaskFieldComponent,
      wrappers: ['form-field']
    }
  ],
  validationMessages: [
    { name: 'required', message: 'MESSAGE.CRT_Required' },
    { name: 'pattern', message: 'MESSAGE.CRT_InvalidFormat' },
    { name: 'value', message: 'MESSAGE.CRT_InvalidValue' }
  ]
};

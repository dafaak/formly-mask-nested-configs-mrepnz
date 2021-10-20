import { ConfigOption } from '@ngx-formly/core';
import { NrnValidators } from './nrn.validators';

export const onlyNumberParser = (value: any, index: number) => {
  return value.replace(/[^0-9]+/g, '');
};

export const FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: 'nrn-field',
      extends: 'input-mask-field',
      defaultOptions: {
        templateOptions: {
          maskConfig: {
            mask: NrnValidators.FORMATS.mask,
            showMask: false,
            guide: true,
            placeholderChar: '_'
          },
          required: true
        },
        validators: {
          validation: [NrnValidators.nrn]
        },
        parsers: [onlyNumberParser]
      }
    }
  ]
};

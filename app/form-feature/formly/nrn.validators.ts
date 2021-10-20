import { FormControl, ValidationErrors } from '@angular/forms';

export class NrnValidators {
  static readonly FORMATS = {
    numeric: /^\d{11}$/,
    formatted: /^\d{2}(\.\d{2}){2}-\d{3}\.\d{2}$/,
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/],
  };

  static nrn(control: FormControl): ValidationErrors {
    if (!control.value) {
      return null;
    }
    
    const formValue = control.value.toString();
    
    // Check formatted value XX.XX.XX-XXX.XX
    if (!NrnValidators.FORMATS.formatted.test(formValue) && !NrnValidators.FORMATS.numeric.test(formValue)) {
      return {
        pattern: true
      };
    }

    // Check numerical value XXXXXXXXXXX
    const value = formValue.replace(/[^0-9]+/g, '');
    if (!NrnValidators.isNrnValid(value)) {
      return {
        value: true
      };
    }

    return null;
  }

  static isNrnValid(value: string): boolean {
    const birthDate = value.substr(0, 6);
    const increment = value.substr(6, 3);

    // Check date value
    const dateIsValid = true; //moment(birthDate, 'YYMMDD').isValid();

    // Check modulo 97
    const before2000 = parseInt(`${birthDate}${increment}`, 10);
    const after2000 = parseInt(`2${before2000}`, 10);
    const checkDigit = parseInt(value.substr(9, 2), 10);

    return dateIsValid && (checkDigit === 97 - before2000 % 97 || checkDigit === 97 - after2000 % 97);
  }
}

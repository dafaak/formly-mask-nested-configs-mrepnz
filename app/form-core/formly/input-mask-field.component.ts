import { Component, OnInit, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { MatInput } from '@angular/material';

@Component({
  selector: 'input-mask-field',
  template: `
    <input matInput
           [id]="id"
           [type]="to.type || 'text'"
           [errorStateMatcher]="errorStateMatcher"
           [formControl]="formControl"
           [formlyAttributes]="field"
           [textMask]="to.maskConfig">
  `,
})
export class InputMaskFieldComponent extends FieldType implements OnInit {
  @ViewChild(MatInput) formFieldControl: MatInput;
}

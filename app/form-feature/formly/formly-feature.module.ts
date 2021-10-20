import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FORMLY_CONFIG } from './formly-feature.config';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    FormlyModule.forChild(FORMLY_CONFIG)
  ]
})
export class FormlyFeatureModule {}

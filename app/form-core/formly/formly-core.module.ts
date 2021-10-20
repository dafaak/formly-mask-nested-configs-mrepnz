import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FIELD_TYPE_COMPONENTS, FORMLY_CONFIG } from './formly-core.config';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    TextMaskModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(FORMLY_CONFIG),
    FormlyMaterialModule
  ],
  declarations: [FIELD_TYPE_COMPONENTS]
})
export class FormlyCoreModule {}

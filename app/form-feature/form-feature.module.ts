import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFeatureModule } from './formly/formly-feature.module';
import { FormCoreModule } from '../form-core/form-core.module';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './components/feature.component';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [CommonModule, FormlyModule, FormlyFeatureModule],
  declarations: [FeatureComponent],
  exports: [FeatureComponent]
})
export class FormFeatureModule {}

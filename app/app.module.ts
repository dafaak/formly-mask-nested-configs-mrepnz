import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormFeatureModule } from './form-feature/form-feature.module';
import { FormCoreModule,  } from './form-core/form-core.module';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormCoreModule, FormFeatureModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

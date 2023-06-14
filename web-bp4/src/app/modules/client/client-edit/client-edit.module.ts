import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientEditComponent } from './client-edit.component';
import { FormModule } from '../form/form.module';
import { HeaderTitleModule } from 'src/app/shared/header-title/header-title.module';

@NgModule({
  imports: [
    CommonModule,
    FormModule,
    HeaderTitleModule
  ],
  declarations: [ClientEditComponent]
})
export class ClientEditModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAddComponent } from './client-add.component';
import { FormModule } from '../form/form.module';
import { HeaderTitleModule } from 'src/app/shared/header-title/header-title.module';
@NgModule({
  imports: [
    CommonModule,
    FormModule,
    HeaderTitleModule
  ],
  declarations: [ClientAddComponent],
  exports: [ClientAddComponent],
})
export class ClientAddModule {}

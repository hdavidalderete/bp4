import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailsComponent } from './client-details.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormModule } from '../form/form.module';
import { HeaderTitleModule } from 'src/app/shared/header-title/header-title.module';
@NgModule({
  imports: [CommonModule, MatExpansionModule, FormModule, HeaderTitleModule],
  declarations: [ClientDetailsComponent],
})
export class ClientDetailsModule {}

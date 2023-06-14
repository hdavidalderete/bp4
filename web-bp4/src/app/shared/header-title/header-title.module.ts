import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTitleComponent } from './header-title.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [HeaderTitleComponent],
  exports: [HeaderTitleComponent]
})
export class HeaderTitleModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ClientAddModule } from './client-add/client-add.module';
import { MatIconModule } from '@angular/material/icon';
import { ClientDetailsModule } from './client-details/client-details.module';
import { ClientEditModule } from './client-edit/client-edit.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from 'src/app/services/client/client.service';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ClientAddModule,
    ClientDetailsModule,
    ClientEditModule,
    HttpClientModule,
  ],
  declarations: [ClientComponent],
  providers: [ClientService]
})
export class ClientModule {}

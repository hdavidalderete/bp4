import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client/client.service';

export interface PeriodicElement {
  name: string;
  lastName: string;
  email: string;
  cuit: string;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastName', 'email', 'cuit', 'actions'];
  clients: Client[] = [];

  constructor(private router: Router, private clientService: ClientService) {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe({
      next: this.handleGetClientsResponse.bind(this),
    });
  }

  goAdd(): void {
    this.router.navigate(['/client/add']);
  }

  goEdit(client: any) {
    this.router.navigate([`/client/edit/${client._id}`]);
  }

  goDetail(client: any) {
    this.router.navigate([`/client/show/${client._id}`]);
  }

  delete(client: Client) {
    this.clientService.deleteClient(client._id).subscribe({
      next: this.handleDeleteResponse.bind(this),
    });
  }

  handleDeleteResponse(data: Client): void {
    console.log(data);
    this.getClients();
  }

  handleGetClientsResponse(data: { clients: Client[] }): void {
    this.clients = data.clients;
  }
}

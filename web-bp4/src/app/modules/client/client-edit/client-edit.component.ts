import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css'],
})
export class ClientEditComponent implements OnInit {
  client!: Client;
  clientId!: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.clientId = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.clientId) {
      this.getClient(this.clientId);
    }
  }

  addNewUser(value: Client) {
    this.clientService.updateClient(value, this.clientId).subscribe({
      next: this.handleUpdateResponse.bind(this),
    });
    this.goBack();
  }

  getClient(id: string) {
    this.clientService.getClientById(id).subscribe({
      next: this.handleGetClientResponse.bind(this),
    });
  }

  handleGetClientResponse({ client }: { client: Client }): void {
    console.log(client);
    this.client = client;
  }

  handleUpdateResponse(data: Client): void {
    console.log(data);
    this.goBack();
  }

  goBack() {
    this.router.navigate(['/client']);
  }
}

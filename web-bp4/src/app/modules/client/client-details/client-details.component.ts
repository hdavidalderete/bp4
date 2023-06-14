import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],
})
export class ClientDetailsComponent implements OnInit {
  client!: Client;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.getClient(clientId);
    }
  }

  getClient(id: string) {
    this.clientService.getClientById(id).subscribe(
      (response) => {
        this.client = response.client;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  goBack() {
    this.router.navigate(['/client']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css'],
})
export class ClientAddComponent implements OnInit {
  constructor(private router: Router, private clientService: ClientService) {}

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['/client']);
  }

  addNewUser(value: Client) {
    this.clientService.createClient(value).subscribe({
      next: this.handleUpdateResponse.bind(this),
    });
  }

  handleUpdateResponse(data: Client): void {
    console.log(data);
    this.goBack();
  }
}

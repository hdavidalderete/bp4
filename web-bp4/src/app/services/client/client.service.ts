import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  baseUrl = environment.server;

  constructor(private http: HttpClient) {}

  getClients(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/client/clients`);
  }

  getClientById(id: string): Observable<any> {
    const url = `${this.baseUrl}/client/client/${id}`;
    return this.http.get<any>(url);
  }

  createClient(client: Client): Observable<any> {
    const url = `${this.baseUrl}/client/client`;
    return this.http.post<any>(url, client);
  }

  updateClient(client: Client, id: string): Observable<any> {
    const url = `${this.baseUrl}/client/client/${id}`;
    return this.http.put<any>(url, client);
  }

  deleteClient(id: string): Observable<any> {
    const url = `${this.baseUrl}/client/client/${id}`;
    return this.http.delete<any>(url);
  }
}

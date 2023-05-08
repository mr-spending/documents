import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path = environment.apiKey;

  constructor(private http: HttpClient) { }

  deleteUser(token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const requestOptions = { headers };

    return this.http.delete<any>(this.path + 'user', requestOptions);
  }

  messageToSupport(payload: { title: string, email: string, message: string }): Observable<any> {
    return this.http.post<any>(this.path + 'documents/massage-to-support', payload);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AiService {
  private apiUrl = `${environment.apiUrl}/ai`;

  constructor(private http: HttpClient) {}

  // 🌿 Send chat message to AI
  sendMessage(message: string, token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/chat`, { message }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  // 🧠 Send image for AI diagnosis
  diagnose(image: File, token: string): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(`${this.apiUrl}/diagnose`, formData, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}

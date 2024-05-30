import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Phone } from './phone.model';

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  private url = 'http://localhost:3000/phones'; // URL to the JSON server

  constructor(private http: HttpClient) {}

  // Fetch the list of phones

  getPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.url);
  }

  // Fetch a phone by its id
  getPhone(id: string): Observable<Phone> {
    return this.http.get<Phone>(`${this.url}/${id}`);
  }

  // Add a new phone
  addPhone(phone: Phone): Observable<Phone> {
    phone.id = uuidv4(); // Generate a unique id by using Guid
    return this.http.post<Phone>(this.url, phone);
  }

  // Update an existing phone
  updatePhone(phone: Phone): Observable<Phone> {
    return this.http.put<Phone>(`${this.url}/${phone.id}`, phone);
  }

  // Delete a phone by its id
  deletePhone(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}

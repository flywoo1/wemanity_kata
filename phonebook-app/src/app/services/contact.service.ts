import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/crud-api/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  findByKeyword(keyword) {
    return this.http.get(`${baseUrl}?keyword=${keyword}`);
  }
}

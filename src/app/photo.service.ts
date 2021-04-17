import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}
  getPhotoService() {
    return this.http.get('https://api.thecatapi.com/v1/images/search');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface photoResponse {
  url: string;
}
[];

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}
  getPhotoService() {
    return this.http.get<photoResponse>(
      'https://api.thecatapi.com/v1/images/search'
    );
  }
}

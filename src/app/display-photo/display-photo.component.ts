import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css'],
})
export class DisplayPhotoComponent implements OnInit {
  constructor(private PhotoService: PhotoService) {}
  photoUrl: string;
  loader = false;
  ngOnInit(): void {
    this.getPhoto();
  }
  getPhoto() {
    this.loader = true;
    this.PhotoService.getPhotoService().subscribe((response) => {
      this.photoUrl = response[0].url;
      this.loader = false;
    });
  }
}

import { Component } from '@angular/core';
import { Star } from "../star/star";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [Star ,CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
    imageList = [
    '/images/poert1.png',
    '/images/port2.png',
    '/images/port3.png',
    '/images/poert1.png',
    '/images/port2.png',
    '/images/port3.png',
  ];
  isLightVisible: boolean = false;
  selectedImage : string = '';

  showLightbox(image: string): void {
    this.selectedImage = image;
    this.isLightVisible = true;
  }

  closeLightbox(): void {
    this.isLightVisible = false;
    this.selectedImage = '';
  }
}

import { Component, ViewEncapsulation } from '@angular/core';
import { IMAGES_PATH, IMAGES_THUMBNAILS_LIST } from '../variables';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageGalleryComponent  {
  imagesThumbnails: string[] = IMAGES_THUMBNAILS_LIST.map(image => `${IMAGES_PATH}/${image}`);
  selectedImage: string = this.imagesThumbnails[0].replace('-thumbnail', '');
  ifLightboxActive = false;
  currentImageIndex: number = 0;;


  handleSelectedImage(image: string, index: number): void {
    this.selectedImage =  image.replace('-thumbnail', '');
    this.currentImageIndex = index;
  }

  openLightbox(): void {
    this.ifLightboxActive = true;
  }

  closeLightbox(val: boolean) {
    this.ifLightboxActive = val;
  }

  handleMobileGallery(num: number): void {
    this.currentImageIndex += num;

    if (this.currentImageIndex < 0) {
        this.currentImageIndex = this.imagesThumbnails.length - 1;
        this.selectedImage = this.imagesThumbnails[this.currentImageIndex].replace('-thumbnail', '');
        return;
    }

    if (this.currentImageIndex == this.imagesThumbnails.length) {
        this.currentImageIndex = 0;
        this.selectedImage = this.imagesThumbnails[this.currentImageIndex].replace('-thumbnail', '');
        return;
    }

    this.selectedImage = this.imagesThumbnails[this.currentImageIndex].replace('-thumbnail', '');
  }
}

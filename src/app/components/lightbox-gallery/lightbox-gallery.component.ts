import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { IMAGES_PATH, IMAGES_THUMBNAILS_LIST } from '../variables';


@Component({
  selector: 'app-lightbox-gallery',
  templateUrl: './lightbox-gallery.component.html',
  styleUrls: ['./lightbox-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LightboxGalleryComponent {
  @Output() onCloseLightbox = new EventEmitter<boolean>();

  imagesThumbnails: string[] = IMAGES_THUMBNAILS_LIST.map(image => `${IMAGES_PATH}/${image}`);
  ifLightboxActive = false;
  selectedImg: string = this.imagesThumbnails[0].replace('-thumbnail', '');
  currentImageIndex: number = 0;

  handleSelectedImage(image: string): void {
    this.selectedImg =  image.replace('-thumbnail', '');
  }

  toggleLightbox(): void {
    this.ifLightboxActive = !this.ifLightboxActive;
  }

  handleImageNavigation(num: number): void {
    this.currentImageIndex += num;

    if (this.currentImageIndex < 0) {
        this.currentImageIndex = this.imagesThumbnails.length - 1;
        this.selectedImg = this.imagesThumbnails[this.currentImageIndex].replace('-thumbnail', '');
        return;
    }

    if (this.currentImageIndex == this.imagesThumbnails.length) {
        this.currentImageIndex = 0;
        this.selectedImg = this.imagesThumbnails[this.currentImageIndex].replace('-thumbnail', '');
        return;
    }

    this.selectedImg = this.imagesThumbnails[this.currentImageIndex].replace('-thumbnail', '');
  }

  closeLightbox() {
    this.onCloseLightbox.emit(false);
  }
}

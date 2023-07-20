import { NgModule } from '@angular/core';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LightboxGalleryComponent } from './components/lightbox-gallery/lightbox-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductSectionComponent,
    ProductDetailsComponent,
    ImageGalleryComponent,
    LightboxGalleryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

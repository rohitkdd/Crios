import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from '../components/landing/landing.component';
import { IntroductionComponent } from '../components/introduction/introduction.component';
import { PhotosComponent } from '../components/photos/photos.component';
import { FeaturesComponent } from '../components/features/features.component';
import { TestimonialComponent } from '../components/testimonial/testimonial.component';
import { LayoutComponent } from '../container/layout/layout.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    IntroductionComponent,
    PhotosComponent,
    FeaturesComponent,
    TestimonialComponent,
    LayoutComponent,
    BackdropComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }

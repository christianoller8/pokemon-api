import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandingRoutingModule } from "./landing-routing.module";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [LandingPageComponent, CarouselComponent, NewsComponent],
  imports: [CommonModule, LandingRoutingModule],
  exports: [LandingPageComponent],
})
export class LandingModule {}

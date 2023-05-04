import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CarouselComponent } from './carousel/carousel.component'
import { HeaderComponent } from './header/header.component'
import { MessageToastComponent } from './message-toast/message-toast.component'
import { PromotionHeaderComponent } from './promotion-header/promotion-header.component'
import { SliderPromoComponent } from './slider-promo/slider-promo.component'

@NgModule({
  declarations: [
    CarouselComponent,
    HeaderComponent,
    MessageToastComponent,
    PromotionHeaderComponent,
    SliderPromoComponent,
  ],
  imports: [CommonModule],
  exports: [
    CarouselComponent,
    HeaderComponent,
    MessageToastComponent,
    PromotionHeaderComponent,
    SliderPromoComponent,
  ],
})
export class ComponentsModule {}

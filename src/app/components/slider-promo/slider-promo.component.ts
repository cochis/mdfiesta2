import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-slider-promo',
  templateUrl: './slider-promo.component.html',
  styleUrls: ['./slider-promo.component.css'],
})
export class SliderPromoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let slider: any = tns({
      container: '.my-slider',
      items: 3,
      slideBy: 'page',
      autoplay: true,
    })
  }
}
function tns(arg0: {
  container: string
  items: number
  slideBy: string
  autoplay: boolean
}): any {
  throw new Error('Function not implemented.')
}

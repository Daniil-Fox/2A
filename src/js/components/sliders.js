import {Swiper} from 'swiper'
import { Navigation } from 'swiper/modules'

Swiper.use([Navigation])

new Swiper('.testi__slider', {
  slidesPerView: 2,
  spaceBetween: 20,

  navigation: {
    prevEl: '.testi-prev',
    nextEl: '.testi-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    1025: {
      slidesPerView: 2
    }
  }
})

import React from 'react'
import Transition from './Transition'
import { Swiper, SwiperSlide } from 'swiper/react';
import "../components/responsive/Portfoy.css"
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
const Portfoy = () => {
  return (
    <div className='Portfoy'>
       <h2>Portfolyo</h2>
        <div className='cizgi'></div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/zWMNN722dx4?si=6-eE2X85m3J1G5az" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/-Yw5I97FCK8?si=YdN8CmjL7udiK1nI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/UEHIDSipbpE?si=JbPLzZ93l_5dVgfw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/_Lq3Fr6nhyc?si=v5wQ3WqIMCg09Pzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Transition(Portfoy)
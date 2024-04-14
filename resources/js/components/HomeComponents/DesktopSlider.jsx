import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import topBanner1 from 'imgPath/sliders/dkbanner1.jpeg';
import topBanner2 from 'imgPath/sliders/dkbanner2.jpeg';
import topBanner3 from 'imgPath/sliders/dkbanner3.jpeg';
import topBanner4 from 'imgPath/sliders/dkbanner4.jpeg';
import topBanner5 from 'imgPath/sliders/dkbanner5.jpeg';

export default function DesktopSlider(){
    return(
        <>
            <Swiper
                slidesPerView={1}
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{delay: 4000,
                disableOnInteraction: false}}
                
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="banner-section">
                <SwiperSlide><img src={topBanner1} width="100%"></img></SwiperSlide>
                <SwiperSlide><img src={topBanner2} width="100%"></img></SwiperSlide>
                <SwiperSlide><img src={topBanner3} width="100%"></img></SwiperSlide>
                <SwiperSlide><img src={topBanner4} width="100%"></img></SwiperSlide>
                <SwiperSlide><img src={topBanner5} width="100%"></img></SwiperSlide>
            </Swiper>
        </>
    );
}
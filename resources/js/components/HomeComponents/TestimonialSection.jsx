import React from 'react'
import Profile from 'imgPath/profile.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

function TestimonialSection() {
    return (
        <>
        <div className='container-fluid pt-5 text-center' style={{backgroundColor: '#eee'}}>
            <h2 className='lily-script primary-clr m-0'>Guest Says:</h2>
        </div>
        <Swiper
                slidesPerView={1}
                effect={'fade'}
                modules={[Pagination, Autoplay, EffectFade]}
                loop={true}
                autoplay={{delay: 4000,
                disableOnInteraction: false}}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="banner-section">
            <SwiperSlide>
                <div className='p-5' style={{backgroundColor: '#eee'}}>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-3'>
                            <img src={Profile} width="100%" alt="profile" style={{borderRadius:'50%'}} className='box-shadow mb-4' />
                        </div>
                        <div className='col-md-1'></div>
                        <div className='col-md-4 text-justify'>
                            <h5 className='primary-clr'>Marium Jessi</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className='col-md-2'></div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='p-5' style={{backgroundColor: '#eee'}}>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-3'>
                            <img src={Profile} width="100%" alt="profile" style={{borderRadius:'50%'}} className='box-shadow mb-4' />
                        </div>
                        <div className='col-md-1'></div>
                        <div className='col-md-4 text-justify'>
                            <h5 className='primary-clr'>Marium Jessi</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className='col-md-2'></div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </>
    )
}

export default TestimonialSection

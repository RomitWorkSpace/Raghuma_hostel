import React from 'react'
import Profile from 'imgPath/testimonial.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay } from 'swiper/modules';

function TestimonialSection() {
    return (
        <>
        <div className='container-fluid pt-5 text-center' style={{backgroundColor: '#eee'}}>
            <h2 className='lily-script primary-clr m-0'>Guest Says:</h2>
        </div>
        <Swiper
                slidesPerView={1}
                effect={'fade'}
                modules={[Pagination, Autoplay]}
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
                            <h5 className='primary-clr'>Mohan Sharma</h5>
                            <p>The facilities here are amazing. The rooms are spacious and comfortable, providing the perfect environment for both studying and relaxing. Plus, having access to amenities like the gym and laundry services right on site has made my life so much easier.</p>
                            <p>Living at Raghuma Hostel has truly been a game-changer for me as a student. From the moment I stepped through the doors, I felt welcomed and embraced by the vibrant community that thrives here.</p>
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
                            <h5 className='primary-clr'>Krishna Taigor</h5>
                            <p>Best hostel in greater Noida, in food quality my friend are their once I have tested food that was very testy even I suggest to my collogues once must visit Raghuma Boys Hostel when any one search hostel in greater Noida</p>
                            <p>Choosing Raghuma Hostel has truly been one of the best decisions of my student life. From the moment I moved in, I felt like I was part of a big, welcoming family.</p>
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

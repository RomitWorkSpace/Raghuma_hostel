import React from 'react'
import Iframe from 'react-iframe'
import LandingBanner from 'imgPath/banners/LandingBanner.jpeg'
import LandingForm from '../LandingPageComponents/LandingForm'
import FacilitySection from '../HomeComponents/FacilitySection'
import HostelSection from '../HomeComponents/HostelSection'
import GallerySection from '../HomeComponents/GallerySection'
import VideoSection from '../LandingPageComponents/VideoSection'
import TestimonialSection from '../HomeComponents/TestimonialSection'

function LandingPage() {
    
    return (
        <>
        <div className='container-fluid p-0'>
            <img src={ LandingBanner } alt="" width="100%" />
        </div>
        <div className='container-fluid' style={{backgroundColor:'#eee'}}>
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-5 mb-4'>
                    <img src="https://brandaile.com/public/images/photos/uWj3qXT0w594xRtBrb8tyI2DRERZiuYSu3WHBho6.jpg" alt="hostel" width="100%" style={{borderRadius: '8px'}} />
                </div>
                <div className='col-md-7'>
                    <LandingForm />
                </div>
            </div>
        </div>
        </div>
        <FacilitySection />
        <HostelSection />
        <GallerySection />
        <VideoSection />
        <TestimonialSection />
        <div className='container-fluid p-2' style={{border:'2px solid #edc4c4', borderRadius: '8px'}}>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1459.0341019610355!2d77.53727558339023!3d28.468635155210055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No.%206%2C%20Sector%2021%2C%20Greater%20Noida%2C%20Gautam%20Budh%20Nagar%2C%20UP%20-%20201308!5e0!3m2!1sen!2sin!4v1710499146329!5m2!1sen!2sin" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        </div>
        </>
    )
}

export default LandingPage

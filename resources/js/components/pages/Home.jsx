import React from 'react'
import RaghuBanner from 'imgPath/sliders/RaghuBanner.jpeg'
import AboutSection from '../HomeComponents/AboutSection'
import HostelSection from '../HomeComponents/HostelSection'
import FacilitySection from '../HomeComponents/FacilitySection'
import GallerySection from '../HomeComponents/GallerySection'
import TestimonialSection from '../HomeComponents/TestimonialSection'
import NewsLetterSection from '../HomeComponents/NewsLetterSection'

function Home() {
    return (
        <>
        <div className='container-fluid p-0'>
            <img src={RaghuBanner} alt="Raghu" width="100%" />
        </div>
        <AboutSection />
        <HostelSection />
        <FacilitySection />
        <GallerySection />
        <TestimonialSection />
        <NewsLetterSection />
        </>
    )
}

export default Home

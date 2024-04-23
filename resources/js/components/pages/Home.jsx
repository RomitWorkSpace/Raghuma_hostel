import React from 'react'
import AboutSection from '../HomeComponents/AboutSection'
import HostelSection from '../HomeComponents/HostelSection'
import FacilitySection from '../HomeComponents/FacilitySection'
import GallerySection from '../HomeComponents/GallerySection'
import TestimonialSection from '../HomeComponents/TestimonialSection'
import NewsLetterSection from '../HomeComponents/NewsLetterSection'
import MainSlider from '../HomeComponents/MainSlider'
import BookingForm from '../HomeComponents/BookingForm'

function Home() {
    return (
        <>
        <MainSlider />
        <AboutSection />
        <HostelSection />
        <FacilitySection />
        <BookingForm />
        <GallerySection />
        <TestimonialSection />
        <NewsLetterSection />
        </>
    )
}

export default Home

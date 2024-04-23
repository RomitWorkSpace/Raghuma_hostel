import React from 'react'
import AboutBanner from 'imgPath/banners/AboutBanner.jpeg'
import AboutArea from '../AboutComponents/AboutArea'
import FeatureSection from '../AboutComponents/FeatureSection'
import AboutBottom from '../AboutComponents/AboutBottom'

function About() {
    return (
        <>
        <div className='container-fluid p-0'>
            <img src={ AboutBanner } width="100%" alt="banner" />
        </div>
        <AboutArea />
        <FeatureSection />
        <AboutBottom />
        </>
    )
}

export default About

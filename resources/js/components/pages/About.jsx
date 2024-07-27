import React from 'react'
import { Helmet } from 'react-helmet';
import AboutBanner from 'imgPath/banners/AboutBanner.jpeg'
import AboutArea from '../AboutComponents/AboutArea'
import FeatureSection from '../AboutComponents/FeatureSection'
import AboutBottom from '../AboutComponents/AboutBottom'

function About() {
    return (
        <>
        <Helmet>
            <title>About Us - Raghuma Hostel | Hostel in Knowlege Park 3</title>
            <meta name="keywords" content="top hostel in greater noida, hostel in knowlege park 3, best hostel near me, best 3 seater hostel near me, Online hostel in knowlege park 3" />
            <meta name="description" content="Discover comfort & convenience at Raghuma Hostel, your premier choice for accommodation in Gr Noida. we offers the perfect blend of affordability and quality." />
        </Helmet>
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

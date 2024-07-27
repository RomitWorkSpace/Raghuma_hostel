import React from 'react'
import { Helmet } from 'react-helmet';
import BlogBanner from 'imgPath/banners/blog-banner.jpeg'
import BlogHero from '../BlogComponents/BlogHero'
import BlogArea from '../BlogComponents/BlogArea'

function Blog() {
    return (
        <>
        <Helmet>
            <title>Blogs - Raghuma Hostel | top hostel in greater noida</title>
            <meta name="keywords" content="top hostel in greater noida,hostel in knowlege park 3,best hostel near me,best 3 seater hostel near me,Online hostel in knowlege park 3" />
            <meta name="description" content="Explore insightful content and stay updated with Raghuma Hostel's blogs." />
        </Helmet>
        <div className='container-fluid p-0'>
            <img src={ BlogBanner } width="100%" alt="blog" />
        </div>
        <BlogHero />
        <BlogArea />
        </>
    )
}

export default Blog

import React from 'react'
import BlogBanner from 'imgPath/banners/blog-banner.jpeg'
import BlogHero from '../BlogComponents/BlogHero'
import BlogArea from '../BlogComponents/BlogArea'

function Blog() {
    return (
        <>
        <div className='container-fluid p-0'>
            <img src={ BlogBanner } width="100%" alt="blog" />
        </div>
        <BlogHero />
        <BlogArea />
        </>
    )
}

export default Blog

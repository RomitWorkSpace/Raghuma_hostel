import React from 'react'
import BlogImage from 'imgPath/blogHero.jpeg'

function BlogHero() {
    return (
        <>
        <div className='container-fluid pt-5 pb-3'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6 mb-4'>
                        <div className='blog-wrapper box-shadow'>
                            <img src={ BlogImage } width="100%" alt="blog" style={{borderRadius:'8px'}} />
                            <div className='p-3'>
                            <h4>Affordable accommodations,unforgettable experiences</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-5 text-justify'>
                        <h1 className='primary-clr lily-script'>Raghuma Hostel</h1>
                        <p>With spacious rooms, modern amenities and a focus on cleanliness, we aim to set a new standard for student accommodation in India.</p>
                        <p>Are you tired of compromising on comfort and hygiene? Are you looking for affordable accommodation that doesn't compromise on quality? Look no further than Raghuma Hostels. Join us and experience the Raghuma Hostels difference—where comfort, hygiene, and affordability converge to create the ultimate student living experience. Welcome home.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogHero

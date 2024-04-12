import React from 'react'
import BlogImage from 'imgPath/blog.png'

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
                        <h1 className='primary-clr lily-script'>Lorem Ipsum</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printertook a galley of type andscrambled it to make a type specimen book.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printertook a galley of type andscrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogHero

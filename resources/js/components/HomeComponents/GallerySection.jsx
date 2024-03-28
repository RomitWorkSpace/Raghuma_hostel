import React from 'react'
import Gall1 from 'imgPath/gal1.jpeg'

function GallerySection() {
    return (
        <>
        <div className='container-fluid pt-5 pb-5'>
            <h1 className='primary-clr text-center lily-script'>Photogallery</h1>
            <h5 className='bold text-center'>O u r &nbsp; A c c o m o d a t i o n</h5>
            <div className='container gallery text-center pt-5'>
                <div className='row'>
                    <div className='col-md-4 mb-4'>
                        <img src={Gall1} width="100%" alt="gallery" className='box-shadow' />
                    </div>
                    <div className='col-md-4 mb-4'>
                        <img src={Gall1} width="100%" alt="gallery" className='box-shadow' />
                    </div>
                    <div className='col-md-4 mb-4'>
                        <img src={Gall1} width="100%" alt="gallery" className='box-shadow' />
                    </div>
                </div>
                <button className='btn btn-raghuma'>View More</button>
            </div>
        </div>
        </>
    )
}

export default GallerySection

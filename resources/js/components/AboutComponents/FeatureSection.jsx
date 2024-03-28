import React from 'react'
import Mobile from 'imgPath/mobile.png'

function FeatureSection() {
    return (
        <>
        <div className='container-fluid pt-5 pb-5'>
            <h3 className='text-center bold'>W  h a t &nbsp; W e &nbsp; O f f e r</h3>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-5'>
                        <div className='about-feature pl-5'>
                            <div className="feature text-justify">
                               <h3 className='primary-clr ml-63'><i className="fa-solid fa-circle mr-3"></i>4 Times Food</h3>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <div className="feature text-justify">
                               <h3 className='primary-clr ml-63'><i className="fa-solid fa-circle mr-3"></i>24*7 Electricity</h3>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <div className="feature text-justify">
                               <h3 className='primary-clr ml-63'><i className="fa-solid fa-circle mr-3"></i>Transportation</h3>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-4'>
                        <img src={ Mobile } width="100%" alt="mobile" />
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FeatureSection

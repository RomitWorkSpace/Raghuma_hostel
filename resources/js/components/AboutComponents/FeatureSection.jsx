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
                               <p>Our dedicated kitchen staff works tirelessly to ensure that every meal is not just a necessity but an experience to savor. </p>
                            </div>
                            <div className="feature text-justify">
                               <h3 className='primary-clr ml-63'><i className="fa-solid fa-circle mr-3"></i>Wifi Unlimited</h3>
                               <p>Say goodbye to buffering and slow loading times. Our robust wifi network delivers lightning-fast speeds, allowing you to browse.</p>
                            </div>
                            <div className="feature text-justify">
                               <h3 className='primary-clr ml-63'><i className="fa-solid fa-circle mr-3"></i>Laundry</h3>
                               <p>Forget about wasting precious time on sorting, washing and folding – let us handle the dirty work while you focus on what matters most.</p>
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

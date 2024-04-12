import React from 'react'
import Girl from 'imgPath/girl.png'

function AboutBottom() {
    return (
        <>
        <div className='container-fluid pt-5' style={{backgroundColor:'rgb(232 246 249)'}}>
            <h3 className='bold text-center'>H o w &nbsp; Y o u &nbsp; F e e l</h3>
            <h1 className='primary-clr text-center lily-script'>Comfy</h1>
            <div className='container pt-5'>
                <div className='row align-items-center'>
                    <div className='col-md-1'></div>
                    <div className='col-md-5 text-justify'>
                        <h4 className='primary-clr bold'>Our Commitments</h4>
                        <p>At Raghuma Hostel, we are committed to providing exceptional hospitality and creating a welcoming environment where customers from all walks of life can come together to share experiences and create lasting memories. Whether you're exploring the city, embarking on outdoor adventures, or simply seeking a comfortable place to unwind, our hostel is the perfect choice for your next getaway.</p>

                        <h4 className='primary-clr bold'>Book Your Stay</h4>
                        <p>Experience the best of hospitality at Raghuma Hostel. Book your stay with us today and discover why we're the preferred choice for customers seeking comfort, convenience, and community. Your adventure starts here!</p>
                    </div>
                    <div className='col-md-6'>
                        <img src={ Girl } width="100%" alt="hostel" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutBottom

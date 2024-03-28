import React from 'react'
import Hostel from 'imgPath/gal1.jpeg'

function AboutArea() {
    return (
        <>
        <div className='container-fluid about-area pt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 mb-4'>
                        <div className=''>
                            <img src={Hostel} width="100%" alt="hostel" className='box-shadow' />
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-6 text-justify'>
                        <h1 className='lily-script primary-clr'>Konw Us</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutArea

import React from 'react'
import HomeAbout from 'imgPath/HomeAbout.png'

function AboutSection() {
    return (
        <>
        <div className='container pt-5 mt-4'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={ HomeAbout } alt="about" width="100%" style={{borderRadius:'50%'}} className='box-shadow' />
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-5'>
                    <h2 className='primary-clr lily-script'>Hello!</h2>
                    <h6 className='bold'>Welcome There!</h6>
                    <div className='text-justify'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                        <button className='btn btn-raghuma'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutSection

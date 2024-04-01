import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeAbout from 'imgPath/circle-img.png'
import { Link } from 'react-router-dom';

function AboutSection() {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
        <div className='container pt-5 pb-5 mt-4' data-aos="fade-up">
            <div className='row align-items-center'>
                <div className='col-md-6 text-center'>
                    <img src={ HomeAbout } alt="about" width="90%" style={{borderRadius:'50%'}} className='box-shadow' />
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-5'>
                    <h2 className='primary-clr lily-script'>Hello!</h2>
                    <h6 className='bold'>Welcome There!</h6>
                    <div className='text-justify'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                        <Link to="/about">
                            <button className='btn btn-raghuma'>Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutSection

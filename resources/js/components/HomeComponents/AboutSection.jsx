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
                        <p>Welcome to Raghuma Hostel, your home away from home in the heart of Greater Noida. Established with a passion for hospitality and a commitment to providing travelers with a comfortable and memorable stay, Raghuma Hostel is the ultimate choice for discerning adventurers seeking convenience, comfort and camaraderie.</p>
                        <p>At Raghuma Hostel, we offer a variety of accommodation options to suit every customer's needs. Whether you're solo, with friends, or in a group, our hostel provides the perfect space for rest and relaxation. Choose from our spacious three-seater rooms, cozy two-seater rooms, or private single occupancy rooms, each thoughtfully furnished with all the amenities you need for a comfortable stay.</p>
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

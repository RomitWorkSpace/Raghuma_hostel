import React from 'react'
import { Helmet } from 'react-helmet';
import Iframe from 'react-iframe'
import ContactBanner from 'imgPath/banners/contact-banner.jpeg'
import ContactForm from '../ContactComponents/ContactForm'

function Contact() {
    return (
        <>
        <Helmet>
            <title>Contact Us - Raghuma Hostel | Boys Hostel in Greater Noida</title>
            <meta name="keywords" content="AC Room hostel in greater noida,Best AC Room hostel in knowlege park 3,top AC Room hostel in greater noida,Boys hostel in knowlege park 3" />
            <meta name="description" content="Connect with Raghuma Hostel effortlessly through our Contact Us page. Whether you have inquiries about our facilities, booking information.." />
        </Helmet>
        <div className='container-fluid p-0'>
            <img src={ ContactBanner } width="100%" alt="contact" />
        </div>
        <div className='container-fluid pt-5'>
            <h1 className='primary-clr lily-script text-center'>Get In Touch</h1>
            <p className='text-center'>Book your stay today and elevate your lifestyle to new heights</p>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <ContactForm />
                    </div>
                    <div className="col-md-6">
                    <div className='map'>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.6773568580404!2d77.48169503498126!3d28.468862375754508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea08950593b7%3A0x2ba17f028de339d1!2s40B%2C%20Knowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1713006598482!5m2!1sen!2sin" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact

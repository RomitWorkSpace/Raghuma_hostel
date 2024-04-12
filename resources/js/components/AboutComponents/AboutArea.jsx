import React from 'react'
import Hostel from 'imgPath/gal1.jpeg'

function AboutArea() {
    return (
        <>
        <div className='container-fluid about-area pt-5'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-5 mb-4'>
                        <div className=''>
                            <img src={Hostel} width="100%" alt="hostel" className='box-shadow' />
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-6 text-justify'>
                        <h1 className='lily-script primary-clr'>Konw Us</h1>
                        <p>Welcome to Raghuma Hostel, your home away from home in the heart of Greater Noida. Established with a passion for hospitality and a commitment to providing travelers with a comfortable and memorable stay, Raghuma Hostel is the ultimate choice for discerning adventurers seeking convenience, comfort and camaraderie.</p>
                        <p>At Raghuma Hostel, we offer a variety of accommodation options to suit every customer's needs. Whether you're solo, with friends, or in a group, our hostel provides the perfect space for rest and relaxation. Choose from our spacious three-seater rooms, cozy two-seater rooms, or private single occupancy rooms, each thoughtfully furnished with all the amenities you need for a comfortable stay.</p>

                        <ul className='facility-list' style={{paddingLeft: '0px'}}>
                            <li>Spacious room with three comfortable beds.</li>
                            <li>Each bed equipped with a cozy mattress, fresh linens and individual reading lights.</li>
                            <li>Air conditioning for a comfortable stay regardless of the weather.</li>
                            <li>Access to laundry facilities for convenience.</li>
                            <li>24/7 security to ensure safety.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutArea

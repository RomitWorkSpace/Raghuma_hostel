import React from 'react'
import Hostel from 'imgPath/Hostel.png'

function HostelCard() {
    return (
        <>
        <div className='col-md-4 mb-4'>
            <div className='card-shadow p-3'>
            <img src={Hostel} width="100%" alt="hostel" />
            <div className='content text-justify pt-3'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                <button className='btn btn-raghuma'>Read More</button>
            </div>
            </div>
        </div>
        </>
    )
}

export default HostelCard

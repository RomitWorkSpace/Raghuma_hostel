import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import MetaData from '../../common/MetaData';

function AboutHostel() {
    
    const { slug } = useParams();
    const [hostelInfo, setHostelInfo] = useState([]);

    useEffect(() => {
        axios.get(`/api/fetch_hostel/${slug}`).then(res => {
            if(res.status === 200)
            {
                setHostelInfo(res.data.hostel)
            }
        })
    },[slug]);
    return (
        <>
        {hostelInfo.map((item) => (
        <>
        <MetaData title = {item.meta_title} keywords = {item.meta_keyword} meta_desc = {item.meta_description} />
        <div className='container-fluid p-0'>
            <img src={`/public/images/banners/${item.banner}`} alt="banner" width="100%" />
        </div>
        <div className='container pt-5'>
            <div className='row align-items-center'>
                <div className="col-md-6 mb-4">
                    <img src={`/public/images/rooms/${item.image}`} alt="hostel" width="100%" style={{borderRadius: '8px'}} />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5 text-justify">
                    <h1 className="primary-clr lily-script">Our Hostel</h1>
                    <div dangerouslySetInnerHTML={{ __html: item.description}}></div>
                    <div dangerouslySetInnerHTML={{ __html: item.facility}}></div>
                    <div className='booking-btn text-center'>
                        <Link to="/contact">
                        <button className="btn btn-raghuma vibrate-1">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
        ))}
        </>
    )
}

export default AboutHostel

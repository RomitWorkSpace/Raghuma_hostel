import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HostelCard from './HostelCard'
import axios from 'axios';

function HostelSection() {
    const [hostels, setHostels] = useState([]);

    useEffect(() => {
        AOS.init();
      }, []);

      useEffect(() => {
        axios.get(`/api/hostels`).then(res => {
            if(res.status === 200)
            {
                setHostels(res.data.hostels)
            }
        })
    },[]);
  
    return (
        <>
        <div className='container-fluid pt-5 pb-5 bg-pink' data-aos="fade-up">
            <h2 className='primary-clr lily-script text-center'>Our Hostels</h2>
            <h5 className='bold text-center'>M O R E &nbsp; &nbsp;A C C O M O D A T I O N S</h5>
            <div className='container pt-5'>
                <div className='row'>
                {hostels.map((item) => (
                    <HostelCard hostel = {item}/>
                ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default HostelSection

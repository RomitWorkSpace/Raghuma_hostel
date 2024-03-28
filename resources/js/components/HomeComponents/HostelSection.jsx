import React from 'react'
import HostelCard from './HostelCard'

function HostelSection() {
    return (
        <>
        <div className='container-fluid pt-5'>
            <h2 className='primary-clr lily-script text-center'>Our Hostels</h2>
            <h5 className='bold text-center'>M O R E &nbsp; &nbsp;A C C O M O D A T I O N S</h5>
            <div className='container pt-5'>
                <div className='row'>
                    <HostelCard />
                    <HostelCard />
                    <HostelCard />
                </div>
            </div>
        </div>
        </>
    )
}

export default HostelSection

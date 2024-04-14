import React from 'react'
import { Link } from 'react-router-dom'

function HostelCard({hostel}) {
    return (
        <>
        <div className='col-md-4 mb-4'>
            <div className='card-shadow p-3 bg-white'>
            <img src={`https://raghumahostels.com/public/images/rooms/${hostel.image}`} width="100%" alt="hostel" />
            <div className='content text-center pt-3'>
                <h4 className='primary-clr'>{ hostel.name }</h4>
                <div className='text-center mt-4'>
                    <Link to={`https://raghumahostels.com/hostels/${hostel.slug}`}>
                    <button className='btn btn-raghuma'>View Rooms</button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default HostelCard

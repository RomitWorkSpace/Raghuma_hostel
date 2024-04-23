import React from 'react'
import { Link } from 'react-router-dom'

function FacilityCard({props}) {
    return (
        <>
        <div className='card-bg text-center heartbeat'>
            <Link to={props.link}>
            <div className="icon-bg">
            <img src={props.icon} width="60" alt="" />
            </div>
            <h5 className='primary-clr bold mt-3'>{props.facility}</h5>
            </Link>
        </div>
        </>
    )
}

export default FacilityCard

import React from 'react'

function FacilityCard({props}) {
    return (
        <>
        <div className='card-bg text-center'>
            <div className="icon-bg">
            <img src={props.icon} width="60" alt="" />
            </div>
            <h5 className='primary-clr bold mt-3'>{props.facility}</h5>
        </div>
        </>
    )
}

export default FacilityCard

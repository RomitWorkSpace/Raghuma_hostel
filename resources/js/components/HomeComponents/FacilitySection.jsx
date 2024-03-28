import React from 'react'
import FoodIcon from 'imgPath/food.png'
import WifiIcon from 'imgPath/wifi.png'
import TransportIcon from 'imgPath/transport.png'
import FacilityCard from './FacilityCard';

function FacilitySection() {
    const Facility1 = {icon: FoodIcon, facility: '4 Times Food'};
    const Facility2 = {icon: WifiIcon, facility: 'WiFi Unlimited'};
    const Facility3 = {icon: TransportIcon, facility: 'Transportation'};
    return (
        <>
        <div className='container-fluid p-5 bg-raghuma mt-5'>
            <div className='container text-center'>
                <h1 className='lily-script clr-white'>Facilities</h1>
                <h5 className='bold'>W h a t &nbsp; W e &nbsp; O f f e r</h5>
            </div>
        </div>
        <div className='container pt-5'>
            <div className='row'>
                <div className="col-md-4 col-6 mb-4">
                    <FacilityCard props = {Facility1}/>
                </div>
                <div className="col-md-4 col-6 mb-4">
                    <FacilityCard props = {Facility2}/>
                </div>
                <div className="col-md-4 col-6 mb-4">
                    <FacilityCard props = {Facility3}/> 
                </div>
            </div>
        </div>
        <hr />
        </>
    )
}

export default FacilitySection

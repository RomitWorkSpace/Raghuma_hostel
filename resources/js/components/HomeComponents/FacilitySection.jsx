import React from 'react'
import FoodIcon from 'imgPath/food.png'
import WifiIcon from 'imgPath/wifi.png'
import TransportIcon from 'imgPath/transport.png'
import Gym from 'imgPath/gym.png'
import Laundry from 'imgPath/laundry.png'
import Power from 'imgPath/power.png'
import FacilityCard from './FacilityCard';

function FacilitySection() {
    const Facility1 = {icon: FoodIcon, facility: '4 Times Food'};
    const Facility2 = {icon: WifiIcon, facility: 'WiFi Unlimited'};
    const Facility3 = {icon: TransportIcon, facility: 'Transportation'};
    const Facility4 = {icon: Gym, facility: 'Gyms'};
    const Facility5 = {icon: Laundry, facility: 'Laundry'};
    const Facility6 = {icon: Power, facility: 'Power Backup'};
    return (
        <>
        <div className='container-fluid p-5 bg-raghuma'>
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
                <div className="col-md-4 col-6 mb-4">
                    <FacilityCard props = {Facility4}/> 
                </div>
                <div className="col-md-4 col-6 mb-4">
                    <FacilityCard props = {Facility5}/> 
                </div>
                <div className="col-md-4 col-6 mb-4">
                    <FacilityCard props = {Facility6}/> 
                </div>
            </div>
        </div>
        <hr />
        </>
    )
}

export default FacilitySection

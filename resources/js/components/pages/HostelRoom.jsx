import React from 'react'

import AboutHostel from '../HostelComponents/AboutHostel'
import RoomSection from '../HostelComponents/RoomSection'
import FacilitySection from '../HomeComponents/FacilitySection'
import HostelFeedback from '../HostelComponents/HostelFeedback'

function HostelRoom() {
    return (
        <>
        <AboutHostel />
        <RoomSection />
        <FacilitySection />
        <HostelFeedback />
        </>
    )
}

export default HostelRoom
